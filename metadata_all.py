#### Generate Metadata for all Traits 
import os

from matplotlib.font_manager import json_dump

os.mkdir(f'./metadata')

METADATA_FILE_NAME = './metadata/all-traits.json'; 
with open(METADATA_FILE_NAME, 'w') as outfile:
    json_dump(all_images, outfile, indent=4)