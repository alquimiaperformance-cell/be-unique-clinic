import os
import base64
import re
import mimetypes

def inline_css_and_images(html_path, output_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Inline CSS
    def replace_css(match):
        css_rel_path = match.group(1)
        css_full_path = os.path.join(os.path.dirname(html_path), css_rel_path)
        if os.path.exists(css_full_path):
            with open(css_full_path, 'r', encoding='utf-8', errors='ignore') as cf:
                return f'<style>\n{cf.read()}\n</style>'
        return match.group(0)
    
    html = re.sub(r'<link[^>]+href="([^"]+\.css)"[^>]*>', replace_css, html)
    html = re.sub(r'<link[^>]+rel="stylesheet"[^>]+href="([^"]+\.css)"[^>]*>', replace_css, html)

    # Inline Images
    def replace_img(match):
        img_rel_path = match.group(1)
        img_full_path = os.path.join(os.path.dirname(html_path), img_rel_path)
        if os.path.exists(img_full_path):
            mime_type, _ = mimetypes.guess_type(img_full_path)
            if not mime_type:
                mime_type = 'image/png'
            with open(img_full_path, 'rb') as imf:
                b64 = base64.b64encode(imf.read()).decode('utf-8')
                data_uri = f'data:{mime_type};base64,{b64}'
                return f'src="{data_uri}"'
        return match.group(0)

    html = re.sub(r'src="([^"]+\.(png|jpg|jpeg|gif|svg|webp))"', replace_img, html)

    # Videos don't strictly need to be base64 (Stitch ignores them usually) but we can just leave them as relative or base64 if small. We'll leave videos alone since they're huge.

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Inlined HTML saved to {output_path}")

if __name__ == '__main__':
    inline_css_and_images('index.html', '.stitch/home.html')
