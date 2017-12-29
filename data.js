/**
 * 存在的问题:
 * 1.tif/tiff有大小端之分
 * √ 2.z/tar.z对应同一个hex头
 * 3.有?号的匹配
 * √ 4.一个头有多种后缀 yuv/yuvn
 * 5.一个doc有各种版本~~~
 */
const data = {
    // images
    'FFD8FFDB': 'jpg',//jpeg
    'FFD8FFE0****4A4649460001': 'jpg',//JFIF
    'FFD8FFE1****457869660000': 'jpg',//EXIF
    '89504E470d0a1a0a':'png',// libpng官方的
    '474946383761': 'gif',//gif87a
    '474946383961': 'gif',//git89a
    '49492a00227105008037': 'tif',
    '424d': 'bmp',//bmp
    '424d228c010000000000': 'bmp',//16色位图(bmp)
    '424d8240090000000000': 'bmp',//24位位图(bmp)
    '424d8e1b030000000000': 'bmp',//256色位图(bmp)
    '38425053000100000000': 'psd',
    'd0cf11e0a1b11ae10000': 'vsd',//Visio 绘图
    '00000100': 'ico', //Computer icon encoded in ICO file format
    '00000101002020': 'ico', //Computer icon encoded in ICO file format
    '464F5524D******5955564E': 'yuv',  
    '39425053': 'psd',  
    'cf8401': 'lep',//Lepton compressed JPEG image
    '52494646********57454250': 'webp',//Google WebP image file
    '': '',  
    '': '',  
    '': '',  
    '': '',  
    // medias
    '47': 'ts|tsv|tsa',//MPEG Transport Stream
    'fffb': 'mp3',
    '435753': 'swf',//flash .swf
    '465753': 'swf',//flash .swf
    '494433': 'mp3',
    '6D6F6F76': 'mov',
    '2E7261FD': 'ram',//Real Audio (ram)
    '4f464653': 'ogg',
    '4f464653': 'oga',
    '4f464653': 'ogv',
    '4d4c5649': 'mlv',//Magic Lantern Video file
    '1a45dfa3': 'mkv',//Matroska media container, including WebM
    '1a45dfa3': 'mka',
    '1a45dfa3': 'mks',
    '1a45dfa3': 'mk3d',
    '1a45dfa3': 'webm',
    '000001ba': 'm2p',//MPEG Program Stream (MPEG-1 Part 1 (essentially identical) and MPEG-2 Part 1)
    '000001ba': 'vob',
    '00 00 00 14 66 74 79 70': '3gp',//3GPP multimedia files
    '00 00 00 20 66 74 79 70': '3gp',//3GPP2 multimedia files
    '	00 00 00 18 66 74 79 70': '3gp5',//MPEG-4 video files
    '52494646': '4xm',//4X Movie video
    '2e524d46000000120001': 'rmvb',
    '464c5601050000000900': 'flv',
    '00000020667479706d70': 'mp4',
    '000001ba210001000180': 'mpg',
    '4d546864000000060001': 'mid',//MIDI (mid) '': '',
    '52494646********57415645': 'wav',//Wave (wav)
    '52494646********41564920': 'avi',
    '3026b2758e66cf11a6d900aa0062ce6c': 'wmv',
    '3026b2758e66cf11a6d900aa0062ce6c': 'wma',
    '3026b2758e66cf11a6d900aa0062ce6c': 'asf',
    '': '',
    '': '',
    '': '',
    '': '',
    // documents
    'FFFE': '',//Byte-order mark for text file encoded in little-endian 16-bit Unicode Transfer Format
    'EFBBBF': '',//UTF-8 encoded Unicode byte order mark, commonly seen in text files.
    '25504446': 'pdf',
    '6d736100': 'wasm',/// \0asm WebAssembly binary format
    'CAFEBABE': 'class',//java class file, Mach-O Fat Binary
    'FEEDFACE': '',//Mach-O binary (32-bit)
    'FEEDFACF': '',//	Mach-O binary (64-bit)
    'CEFAEDFE': '',//Mach-O binary (reverse byte ordering scheme, 32-bit)
    'CFFAEDFE': '',//Mach-O binary (reverse byte ordering scheme, 64-bit)
    'FFFE0000': '',//Byte-order mark for text file encoded in little-endian 32-bit Unicode Transfer Format
    '25215053': 'ps',//PostScript document
    '7b5c72746631': 'rtf',//Rich Text Format (rtf)  
    '3c3f786d6c20': 'xml',//<?xml
    '213c617263683e': 'deb',// !<arch>. linux deb file
    'd0cf11e0a1b11ae1': 'doc',
    'd0cf11e0a1b11ae1': 'xls',
    'd0cf11e0a1b11ae1': 'ppt',
    'd0cf11e0a1b11ae1': 'msg',
    '46726f6d3a203d3f6762': 'eml',//Email [Outlook Express 6] (eml)
    '49545346030000006000': 'chm',
    '504b0304140006000800': 'docx',
    'd0cf11e0a1b11ae10000': 'wps',//WPS文字wps、表格et、演示dps都是一样的
    'd0cf11e0a1b11ae10000': 'doc',
    '': '',
    '': '',
    '': '',
    // font 
    '74f4646': 'woff',
    '774f4632': 'woff2',
    '': '',
    '': '',
    '': '',
    // zip/rar
    '1f8b': 'gz|tar.gz',//gzip
    '1F9D': 'z',
    '1F9D': 'tar.z',
    '1FA0': 'z',
    '1FA0': 'tar.z',
    '4d534346': 'cab',//Microsoft Cabinet file
    '4344303031': 'iso',//ISO9660 CD/DVD image file
    '377abcaf271c': '7z',
    '526172211a0700': 'rar',
    '526172211a070100': 'rar',
    '7573746172003030': 'tar',
    // 504b0506 开头的
    '504b0304140000000800': 'zip',
    '504b03040a0000000000': 'jar',
    '': '',
    '': '',
    '': '',
    '': '',
    // 种子
    '6431303a637265617465': 'torrent',
    '': '',
    '': '',
    '': '',
    '': '',
    // application
    '43823234': 'crx',//Google Chrome extension or packaged app
    '7801730d626260': 'dmg',//Apple Disk Image file
    '4d5a9000030000000400': 'exe',
    '4d5a90': 'dll',
    '424d': 'dib',//device-independent bitmap image
    '00001a00051004': '123',//Lotus 1-2-3 (v9)
    '4d5a': '386',//Windows virtual device drivers
    '': '',
    '': '',
    '': '',
    '': '',
    // db
    '5374616E64617264204A': 'mdb',//MS Access (mdb)
    '00 01 00 00 53 74 61 6E 64 61 72 64 20 41 43 45 20 44 42': 'adddb',//Microsoft Access 2007
    '': '',
    '': '',
    '': '',
    // package
    '': '',
    '': '',
    '': '',
};
module.exports = data;