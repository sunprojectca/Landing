#!/usr/bin/env python3
import re

# Fix index.html
print("Fixing index.html...")
with open("index.html", "r") as f:
    content = f.read()
content = content.replace('href="/solutions"', 'href="./solutions"')
content = content.replace('href="/how-it-works"', 'href="./how-it-works"')
content = content.replace('href="/security"', 'href="./security"')
content = content.replace('href="/contact"', 'href="./contact"')
content = content.replace('href="/favicon.svg"', 'href="./favicon.svg"')
content = content.replace('href="/">', 'href="./">')
with open("index.html", "w") as f:
    f.write(content)

# Fix subdirectory pages
for subdir in ["solutions", "how-it-works", "security", "contact"]:
    filepath = f"{subdir}/index.html"
    print(f"Fixing {filepath}...")
    with open(filepath, "r") as f:
        content = f.read()
    content = content.replace('href="/solutions"', 'href="../solutions"')
    content = content.replace('href="/how-it-works"', 'href="../how-it-works"')
    content = content.replace('href="/security"', 'href="../security"')
    content = content.replace('href="/contact"', 'href="../contact"')
    content = content.replace('href="/favicon.svg"', 'href="../favicon.svg"')
    content = content.replace('href="/">', 'href="../">')
    with open(filepath, "w") as f:
        f.write(content)

print("All links fixed!")
