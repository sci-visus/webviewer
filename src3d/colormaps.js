const gamma_colormap = [
  0x00,0x00,0x00,0x00,  0x00,0x00,0x05,0x01,  0x00,0x00,0x0a,0x02,  0x00,0x00,0x0f,0x03,  0x00,0x00,0x14,0x04,  0x00,0x00,0x1a,0x05,  0x00,0x00,0x1f,0x06,  0x00,0x00,0x24,0x07,  
  0x00,0x00,0x29,0x08,  0x00,0x00,0x2e,0x09,  0x00,0x00,0x34,0x0a,  0x00,0x00,0x39,0x0b,  0x00,0x00,0x3e,0x0c,  0x00,0x00,0x43,0x0d,  0x00,0x00,0x48,0x0e,  0x00,0x00,0x4e,0x0f,  
  0x00,0x00,0x53,0x10,  0x00,0x00,0x58,0x11,  0x00,0x00,0x5d,0x12,  0x00,0x00,0x62,0x13,  0x00,0x00,0x68,0x14,  0x00,0x00,0x6d,0x15,  0x00,0x00,0x72,0x16,  0x00,0x00,0x77,0x17,  
  0x00,0x00,0x7c,0x18,  0x00,0x00,0x82,0x19,  0x00,0x00,0x87,0x1a,  0x00,0x00,0x8c,0x1b,  0x00,0x00,0x91,0x1c,  0x00,0x00,0x96,0x1d,  0x00,0x00,0x9c,0x1e,  0x00,0x00,0xa1,0x1f,  
  0x00,0x00,0xa6,0x20,  0x00,0x00,0xab,0x21,  0x00,0x00,0xb0,0x22,  0x00,0x00,0xb6,0x23,  0x00,0x00,0xbb,0x24,  0x00,0x00,0xc0,0x25,  0x00,0x00,0xc5,0x26,  0x00,0x00,0xca,0x27,  
  0x00,0x00,0xd0,0x28,  0x00,0x00,0xd5,0x29,  0x00,0x00,0xda,0x2a,  0x00,0x00,0xdf,0x2b,  0x00,0x00,0xe4,0x2c,  0x00,0x00,0xea,0x2d,  0x00,0x00,0xef,0x2e,  0x00,0x00,0xf4,0x2f,  
  0x04,0x00,0xf9,0x30,  0x09,0x00,0xff,0x31,  0x0e,0x00,0xfa,0x32,  0x13,0x00,0xf5,0x33,  0x17,0x00,0xef,0x34,  0x1c,0x00,0xea,0x35,  0x21,0x00,0xe4,0x36,  0x26,0x00,0xdf,0x37,  
  0x2a,0x00,0xda,0x38,  0x2f,0x00,0xd4,0x39,  0x34,0x00,0xcf,0x3a,  0x39,0x00,0xc9,0x3b,  0x3d,0x00,0xc4,0x3c,  0x42,0x00,0xbe,0x3d,  0x47,0x00,0xb9,0x3e,  0x4c,0x00,0xb4,0x3f,  
  0x51,0x00,0xae,0x40,  0x51,0x00,0xa9,0x41,  0x51,0x00,0xa3,0x42,  0x51,0x00,0x9e,0x43,  0x51,0x00,0x98,0x44,  0x51,0x00,0x93,0x45,  0x51,0x00,0x8e,0x46,  0x51,0x00,0x88,0x47,  
  0x50,0x00,0x83,0x48,  0x50,0x00,0x7d,0x49,  0x50,0x00,0x78,0x4a,  0x50,0x00,0x72,0x4b,  0x50,0x00,0x6d,0x4c,  0x50,0x00,0x68,0x4d,  0x50,0x00,0x62,0x4e,  0x4f,0x00,0x5d,0x4f,  
  0x54,0x00,0x57,0x50,  0x59,0x00,0x52,0x51,  0x5e,0x00,0x4c,0x52,  0x63,0x00,0x47,0x53,  0x68,0x00,0x42,0x54,  0x6d,0x00,0x3c,0x55,  0x72,0x00,0x37,0x56,  0x77,0x00,0x31,0x57,  
  0x7c,0x00,0x2c,0x58,  0x81,0x00,0x26,0x59,  0x86,0x00,0x21,0x5a,  0x8b,0x00,0x1c,0x5b,  0x90,0x00,0x16,0x5c,  0x95,0x00,0x11,0x5d,  0x9a,0x00,0x0b,0x5e,  0x9f,0x00,0x06,0x5f,  
  0xa4,0x00,0x00,0x60,  0xa9,0x00,0x00,0x61,  0xae,0x00,0x00,0x62,  0xb4,0x00,0x00,0x63,  0xb9,0x00,0x00,0x64,  0xbe,0x00,0x00,0x65,  0xc4,0x00,0x00,0x66,  0xc9,0x00,0x00,0x67,  
  0xce,0x00,0x00,0x68,  0xd4,0x00,0x00,0x69,  0xd9,0x00,0x00,0x6a,  0xde,0x00,0x00,0x6b,  0xe4,0x00,0x00,0x6c,  0xe9,0x00,0x00,0x6d,  0xff,0x00,0x00,0x6e,  0xff,0x00,0x00,0x6f,  
  0xff,0x00,0x00,0x70,  0xff,0x00,0x00,0x71,  0xff,0x05,0x00,0x72,  0xff,0x0a,0x00,0x73,  0xff,0x10,0x00,0x74,  0xff,0x15,0x00,0x75,  0xff,0x1b,0x00,0x76,  0xff,0x20,0x00,0x77,  
  0xff,0x25,0x00,0x78,  0xff,0x2b,0x00,0x79,  0xff,0x30,0x00,0x7a,  0xff,0x36,0x00,0x7b,  0xff,0x3b,0x00,0x7c,  0xff,0x40,0x00,0x7d,  0xff,0x46,0x00,0x7e,  0xff,0x4b,0x00,0x7f,  
  0xff,0x51,0x00,0x80,  0xff,0x55,0x04,0x81,  0xff,0x5a,0x09,0x82,  0xff,0x5f,0x0e,0x83,  0xff,0x64,0x13,0x84,  0xff,0x69,0x18,0x85,  0xff,0x6d,0x1c,0x86,  0xff,0x72,0x21,0x87,  
  0xff,0x77,0x26,0x88,  0xff,0x7c,0x2b,0x89,  0xff,0x81,0x30,0x8a,  0xff,0x86,0x35,0x8b,  0xff,0x8a,0x39,0x8c,  0xff,0x8f,0x3e,0x8d,  0xff,0x94,0x43,0x8e,  0xff,0x99,0x48,0x8f,  
  0xff,0x9e,0x4d,0x90,  0xff,0xa3,0x52,0x91,  0xff,0xa3,0x4d,0x92,  0xff,0xa3,0x47,0x93,  0xff,0xa3,0x41,0x94,  0xff,0xa3,0x3b,0x95,  0xff,0xa3,0x35,0x96,  0xff,0xa3,0x2f,0x97,  
  0xff,0xa3,0x29,0x98,  0xff,0xa3,0x24,0x99,  0xff,0xa3,0x1e,0x9a,  0xff,0xa3,0x18,0x9b,  0xff,0xa3,0x12,0x9c,  0xff,0xa3,0x0c,0x9d,  0xff,0xa3,0x06,0x9e,  0xff,0xa3,0x00,0x9f,  
  0xff,0xa3,0x00,0xa0,  0xff,0xa3,0x00,0xa1,  0xff,0xa3,0x00,0xa2,  0xf8,0xa3,0x00,0xa3,  0xf0,0xa3,0x00,0xa4,  0xe8,0xa3,0x00,0xa5,  0xe1,0xa3,0x00,0xa6,  0xd9,0xa3,0x00,0xa7,  
  0xd1,0xa3,0x00,0xa8,  0xca,0xa3,0x00,0xa9,  0xc2,0xa3,0x00,0xaa,  0xba,0xa3,0x00,0xab,  0xb3,0xa3,0x00,0xac,  0xab,0xa3,0x00,0xad,  0xa3,0xa3,0x00,0xae,  0xa8,0xa3,0x00,0xaf,  
  0xad,0xa3,0x00,0xb0,  0xb2,0xa9,0x03,0xb1,  0xb7,0xaf,0x06,0xb2,  0xbc,0xb5,0x09,0xb3,  0xc1,0xbb,0x0c,0xb4,  0xc6,0xc1,0x10,0xb5,  0xcb,0xc7,0x13,0xb6,  0xd1,0xcd,0x16,0xb7,  
  0xd6,0xd4,0x19,0xb8,  0xdb,0xda,0x1d,0xb9,  0xe0,0xe0,0x20,0xba,  0xe5,0xe6,0x23,0xbb,  0xea,0xec,0x26,0xbc,  0xef,0xf2,0x29,0xbd,  0xf4,0xf8,0x2d,0xbe,  0xf9,0xff,0x30,0xbf,  
  0xff,0xff,0x33,0xc0,  0xff,0xff,0x36,0xc1,  0xff,0xff,0x3a,0xc2,  0xff,0xff,0x3d,0xc3,  0xff,0xff,0x40,0xc4,  0xff,0xff,0x43,0xc5,  0xff,0xff,0x47,0xc6,  0xff,0xff,0x4a,0xc7,  
  0xff,0xff,0x4d,0xc8,  0xff,0xff,0x50,0xc9,  0xff,0xff,0x53,0xca,  0xff,0xff,0x57,0xcb,  0xff,0xff,0x5a,0xcc,  0xff,0xff,0x5d,0xcd,  0xff,0xff,0x60,0xce,  0xff,0xff,0x64,0xcf,  
  0xff,0xff,0x67,0xd0,  0xff,0xff,0x6a,0xd1,  0xff,0xff,0x6d,0xd2,  0xff,0xff,0x70,0xd3,  0xff,0xff,0x74,0xd4,  0xff,0xff,0x77,0xd5,  0xff,0xff,0x7a,0xd6,  0xff,0xff,0x7d,0xd7,  
  0xff,0xff,0x81,0xd8,  0xff,0xff,0x84,0xd9,  0xff,0xff,0x87,0xda,  0xff,0xff,0x8a,0xdb,  0xff,0xff,0x8e,0xdc,  0xff,0xff,0x91,0xdd,  0xff,0xff,0x94,0xde,  0xff,0xff,0x97,0xdf,  
  0xff,0xff,0x9a,0xe0,  0xff,0xff,0x9e,0xe1,  0xff,0xff,0xa1,0xe2,  0xff,0xff,0xa4,0xe3,  0xff,0xff,0xa7,0xe4,  0xff,0xff,0xab,0xe5,  0xff,0xff,0xae,0xe6,  0xff,0xff,0xb1,0xe7,  
  0xff,0xff,0xb4,0xe8,  0xff,0xff,0xb7,0xe9,  0xff,0xff,0xbb,0xea,  0xff,0xff,0xbe,0xeb,  0xff,0xff,0xc1,0xec,  0xff,0xff,0xc4,0xed,  0xff,0xff,0xc8,0xee,  0xff,0xff,0xcb,0xef,  
  0xff,0xff,0xce,0xf0,  0xff,0xff,0xd1,0xf1,  0xff,0xff,0xd5,0xf2,  0xff,0xff,0xd8,0xf3,  0xff,0xff,0xdb,0xf4,  0xff,0xff,0xde,0xf5,  0xff,0xff,0xe1,0xf6,  0xff,0xff,0xe5,0xf7,  
  0xff,0xff,0xe8,0xf8,  0xff,0xff,0xeb,0xf9,  0xff,0xff,0xee,0xfa,  0xff,0xff,0xf2,0xfb,  0xff,0xff,0xf5,0xfc,  0xff,0xff,0xf8,0xfd,  0xff,0xff,0xfb,0xfe,  0xff,0xff,0xff,0xff
]

const rich_colormap = [
  0x00,0x00,0x7e,0x00,  0x00,0x00,0x83,0x01,  0x00,0x00,0x87,0x02,  0x00,0x00,0x8b,0x03,  0x00,0x00,0x8f,0x04,  0x00,0x00,0x93,0x05,  0x00,0x00,0x97,0x06,  0x00,0x00,0x9b,0x07,  
  0x00,0x00,0x9f,0x08,  0x00,0x00,0xa3,0x09,  0x00,0x00,0xa7,0x0a,  0x00,0x00,0xab,0x0b,  0x00,0x00,0xaf,0x0c,  0x00,0x00,0xb3,0x0d,  0x00,0x00,0xb7,0x0e,  0x00,0x00,0xbb,0x0f,  
  0x00,0x00,0xbf,0x10,  0x00,0x00,0xc3,0x11,  0x00,0x00,0xc7,0x12,  0x00,0x00,0xcb,0x13,  0x00,0x00,0xcf,0x14,  0x00,0x00,0xd3,0x15,  0x00,0x00,0xd7,0x16,  0x00,0x00,0xdb,0x17,  
  0x00,0x00,0xdf,0x18,  0x00,0x00,0xe3,0x19,  0x00,0x00,0xe7,0x1a,  0x00,0x00,0xeb,0x1b,  0x00,0x00,0xef,0x1c,  0x00,0x00,0xf3,0x1d,  0x00,0x01,0xf7,0x1e,  0x00,0x02,0xfb,0x1f,  
  0x00,0x03,0xff,0x20,  0x00,0x05,0xff,0x21,  0x00,0x07,0xff,0x22,  0x00,0x0a,0xff,0x23,  0x00,0x0d,0xff,0x24,  0x00,0x10,0xff,0x25,  0x00,0x13,0xff,0x26,  0x00,0x17,0xff,0x27,  
  0x00,0x1b,0xff,0x28,  0x00,0x1f,0xff,0x29,  0x00,0x23,0xff,0x2a,  0x00,0x27,0xff,0x2b,  0x00,0x2b,0xff,0x2c,  0x00,0x2f,0xff,0x2d,  0x00,0x33,0xff,0x2e,  0x00,0x37,0xff,0x2f,  
  0x00,0x3b,0xff,0x30,  0x00,0x3f,0xff,0x31,  0x00,0x43,0xff,0x32,  0x00,0x47,0xff,0x33,  0x00,0x4b,0xff,0x34,  0x00,0x4f,0xff,0x35,  0x00,0x53,0xff,0x36,  0x00,0x57,0xff,0x37,  
  0x00,0x5b,0xff,0x38,  0x00,0x5f,0xff,0x39,  0x00,0x63,0xff,0x3a,  0x00,0x67,0xff,0x3b,  0x00,0x6b,0xff,0x3c,  0x00,0x6f,0xff,0x3d,  0x00,0x73,0xff,0x3e,  0x00,0x77,0xff,0x3f,  
  0x00,0x7b,0xff,0x40,  0x00,0x7f,0xff,0x41,  0x00,0x83,0xff,0x42,  0x00,0x86,0xff,0x43,  0x00,0x8a,0xff,0x44,  0x00,0x8e,0xff,0x45,  0x00,0x92,0xff,0x46,  0x00,0x96,0xff,0x47,  
  0x00,0x9a,0xff,0x48,  0x00,0x9e,0xff,0x49,  0x00,0xa2,0xff,0x4a,  0x00,0xa6,0xff,0x4b,  0x00,0xaa,0xff,0x4c,  0x00,0xae,0xff,0x4d,  0x00,0xb2,0xff,0x4e,  0x00,0xb6,0xff,0x4f,  
  0x00,0xba,0xff,0x50,  0x00,0xbe,0xff,0x51,  0x00,0xc2,0xff,0x52,  0x00,0xc6,0xff,0x53,  0x00,0xca,0xff,0x54,  0x00,0xce,0xff,0x55,  0x00,0xd2,0xff,0x56,  0x00,0xd6,0xff,0x57,  
  0x00,0xda,0xff,0x58,  0x00,0xde,0xff,0x59,  0x00,0xe2,0xff,0x5a,  0x00,0xe6,0xff,0x5b,  0x00,0xea,0xff,0x5c,  0x00,0xee,0xff,0x5d,  0x00,0xf2,0xff,0x5e,  0x00,0xf6,0xff,0x5f,  
  0x00,0xf9,0xff,0x60,  0x00,0xfd,0xff,0x61,  0x00,0xff,0xfc,0x62,  0x02,0xff,0xf8,0x63,  0x07,0xff,0xf5,0x64,  0x0a,0xff,0xf1,0x65,  0x0f,0xff,0xed,0x66,  0x12,0xff,0xe9,0x67,  
  0x17,0xff,0xe5,0x68,  0x1a,0xff,0xe1,0x69,  0x1f,0xff,0xdd,0x6a,  0x22,0xff,0xd9,0x6b,  0x27,0xff,0xd5,0x6c,  0x2b,0xff,0xd1,0x6d,  0x2f,0xff,0xcd,0x6e,  0x32,0xff,0xc9,0x6f,  
  0x37,0xff,0xc5,0x70,  0x3b,0xff,0xc1,0x71,  0x3f,0xff,0xbd,0x72,  0x42,0xff,0xb9,0x73,  0x47,0xff,0xb5,0x74,  0x4b,0xff,0xb1,0x75,  0x4f,0xff,0xad,0x76,  0x52,0xff,0xa9,0x77,  
  0x57,0xff,0xa4,0x78,  0x5b,0xff,0xa0,0x79,  0x5f,0xff,0x9c,0x7a,  0x62,0xff,0x98,0x7b,  0x67,0xff,0x94,0x7c,  0x6b,0xff,0x90,0x7d,  0x6f,0xff,0x8c,0x7e,  0x72,0xff,0x88,0x7f,  
  0x77,0xff,0x85,0x80,  0x7b,0xff,0x81,0x81,  0x7f,0xff,0x7f,0x82,  0x81,0xff,0x7b,0x83,  0x85,0xff,0x77,0x84,  0x88,0xff,0x72,0x85,  0x8c,0xff,0x6f,0x86,  0x90,0xff,0x6b,0x87,  
  0x94,0xff,0x67,0x88,  0x98,0xff,0x62,0x89,  0x9c,0xff,0x5f,0x8a,  0xa0,0xff,0x5b,0x8b,  0xa4,0xff,0x57,0x8c,  0xa9,0xff,0x52,0x8d,  0xad,0xff,0x4f,0x8e,  0xb1,0xff,0x4b,0x8f,  
  0xb5,0xff,0x47,0x90,  0xb9,0xff,0x42,0x91,  0xbd,0xff,0x3f,0x92,  0xc1,0xff,0x3b,0x93,  0xc5,0xff,0x37,0x94,  0xc9,0xff,0x32,0x95,  0xcd,0xff,0x2f,0x96,  0xd1,0xff,0x2b,0x97,  
  0xd5,0xff,0x27,0x98,  0xd9,0xff,0x22,0x99,  0xdd,0xff,0x1f,0x9a,  0xe1,0xff,0x1a,0x9b,  0xe5,0xff,0x17,0x9c,  0xe9,0xff,0x12,0x9d,  0xee,0xff,0x0f,0x9e,  0xf2,0xff,0x0a,0x9f,  
  0xf6,0xff,0x07,0xa0,  0xfa,0xff,0x02,0xa1,  0xfe,0xff,0x00,0xa2,  0xff,0xfb,0x00,0xa3,  0xff,0xf7,0x00,0xa4,  0xff,0xf3,0x00,0xa5,  0xff,0xef,0x00,0xa6,  0xff,0xeb,0x00,0xa7,  
  0xff,0xe7,0x00,0xa8,  0xff,0xe3,0x00,0xa9,  0xff,0xdf,0x00,0xaa,  0xff,0xdb,0x00,0xab,  0xff,0xd7,0x00,0xac,  0xff,0xd3,0x00,0xad,  0xff,0xcf,0x00,0xae,  0xff,0xcb,0x00,0xaf,  
  0xff,0xc7,0x00,0xb0,  0xff,0xc3,0x00,0xb1,  0xff,0xbf,0x00,0xb2,  0xff,0xbb,0x00,0xb3,  0xff,0xb7,0x00,0xb4,  0xff,0xb3,0x00,0xb5,  0xff,0xaf,0x00,0xb6,  0xff,0xab,0x00,0xb7,  
  0xff,0xa7,0x00,0xb8,  0xff,0xa3,0x00,0xb9,  0xff,0x9f,0x00,0xba,  0xff,0x9b,0x00,0xbb,  0xff,0x96,0x00,0xbc,  0xff,0x93,0x00,0xbd,  0xff,0x8f,0x00,0xbe,  0xff,0x8b,0x00,0xbf,  
  0xff,0x87,0x00,0xc0,  0xff,0x83,0x00,0xc1,  0xff,0x7e,0x00,0xc2,  0xff,0x7a,0x00,0xc3,  0xff,0x77,0x00,0xc4,  0xff,0x72,0x00,0xc5,  0xff,0x6f,0x00,0xc6,  0xff,0x6b,0x00,0xc7,  
  0xff,0x67,0x00,0xc8,  0xff,0x62,0x00,0xc9,  0xff,0x5f,0x00,0xca,  0xff,0x5b,0x00,0xcb,  0xff,0x57,0x00,0xcc,  0xff,0x53,0x00,0xcd,  0xff,0x4f,0x00,0xce,  0xff,0x4b,0x00,0xcf,  
  0xff,0x47,0x00,0xd0,  0xff,0x43,0x00,0xd1,  0xff,0x3f,0x00,0xd2,  0xff,0x3b,0x00,0xd3,  0xff,0x37,0x00,0xd4,  0xff,0x33,0x00,0xd5,  0xff,0x2f,0x00,0xd6,  0xff,0x2b,0x00,0xd7,  
  0xff,0x27,0x00,0xd8,  0xff,0x23,0x00,0xd9,  0xff,0x1f,0x00,0xda,  0xff,0x1b,0x00,0xdb,  0xff,0x17,0x00,0xdc,  0xff,0x13,0x00,0xdd,  0xff,0x10,0x00,0xde,  0xff,0x0d,0x00,0xdf,  
  0xff,0x0a,0x00,0xe0,  0xff,0x07,0x00,0xe1,  0xff,0x05,0x00,0xe2,  0xfa,0x03,0x00,0xe3,  0xf6,0x02,0x00,0xe4,  0xf1,0x01,0x00,0xe5,  0xed,0x00,0x00,0xe6,  0xe9,0x00,0x00,0xe7,  
  0xe4,0x00,0x00,0xe8,  0xe0,0x00,0x00,0xe9,  0xdb,0x00,0x00,0xea,  0xd7,0x00,0x00,0xeb,  0xd3,0x00,0x00,0xec,  0xce,0x00,0x00,0xed,  0xca,0x00,0x00,0xee,  0xc5,0x00,0x00,0xef,  
  0xc1,0x00,0x00,0xf0,  0xbd,0x00,0x00,0xf1,  0xb8,0x00,0x00,0xf2,  0xb4,0x00,0x00,0xf3,  0xaf,0x00,0x00,0xf4,  0xab,0x00,0x00,0xf5,  0xa7,0x00,0x00,0xf6,  0xa2,0x00,0x00,0xf7,  
  0x9e,0x00,0x00,0xf8,  0x99,0x00,0x00,0xf9,  0x95,0x00,0x00,0xfa,  0x91,0x00,0x00,0xfb,  0x8c,0x00,0x00,0xfc,  0x88,0x00,0x00,0xfd,  0x83,0x00,0x00,0xfe,  0x7d,0x00,0x00,0xff
]

const smoothrich_colormap = [
  0x00,0x00,0x7d,0x00,  0x00,0x00,0x83,0x01,  0x00,0x00,0x87,0x02,  0x00,0x00,0x8b,0x03,  0x00,0x00,0x8f,0x04,  0x00,0x00,0x93,0x05,  0x00,0x00,0x97,0x06,  0x00,0x00,0x9a,0x07,  
  0x00,0x00,0x9e,0x08,  0x00,0x00,0xa2,0x09,  0x00,0x00,0xa6,0x0a,  0x00,0x00,0xaa,0x0b,  0x00,0x00,0xae,0x0c,  0x00,0x00,0xb2,0x0d,  0x00,0x00,0xb6,0x0e,  0x00,0x00,0xba,0x0f,  
  0x00,0x00,0xbd,0x10,  0x00,0x00,0xc1,0x11,  0x00,0x01,0xc5,0x12,  0x00,0x00,0xc8,0x13,  0x00,0x00,0xcc,0x14,  0x00,0x02,0xcf,0x15,  0x00,0x03,0xd3,0x16,  0x00,0x01,0xd6,0x17,  
  0x00,0x02,0xd9,0x18,  0x00,0x05,0xdc,0x19,  0x00,0x06,0xdf,0x1a,  0x00,0x05,0xe2,0x1b,  0x00,0x08,0xe4,0x1c,  0x00,0x08,0xe7,0x1d,  0x00,0x0a,0xe9,0x1e,  0x00,0x0c,0xeb,0x1f,  
  0x00,0x0d,0xed,0x20,  0x00,0x10,0xef,0x21,  0x00,0x10,0xf1,0x22,  0x00,0x14,0xf3,0x23,  0x00,0x17,0xf4,0x24,  0x00,0x18,0xf6,0x25,  0x00,0x1b,0xf7,0x26,  0x00,0x1e,0xf8,0x27,  
  0x00,0x1f,0xf9,0x28,  0x00,0x24,0xfa,0x29,  0x00,0x25,0xfb,0x2a,  0x00,0x29,0xfb,0x2b,  0x00,0x2c,0xfc,0x2c,  0x00,0x31,0xfc,0x2d,  0x00,0x35,0xfd,0x2e,  0x00,0x38,0xfd,0x2f,  
  0x00,0x3c,0xfd,0x30,  0x00,0x40,0xfe,0x31,  0x00,0x43,0xfe,0x32,  0x00,0x46,0xfe,0x33,  0x00,0x49,0xfe,0x34,  0x00,0x4f,0xfe,0x35,  0x00,0x52,0xfe,0x36,  0x00,0x55,0xfe,0x37,  
  0x00,0x5b,0xfe,0x38,  0x00,0x5f,0xfe,0x39,  0x00,0x63,0xfe,0x3a,  0x00,0x67,0xfe,0x3b,  0x00,0x6b,0xfe,0x3c,  0x00,0x6f,0xfe,0x3d,  0x00,0x73,0xff,0x3e,  0x00,0x77,0xff,0x3f,  
  0x00,0x7b,0xff,0x40,  0x00,0x7f,0xff,0x41,  0x00,0x83,0xff,0x42,  0x00,0x85,0xff,0x43,  0x00,0x88,0xff,0x44,  0x00,0x8c,0xfe,0x45,  0x00,0x90,0xfe,0x46,  0x00,0x94,0xfe,0x47,  
  0x00,0x98,0xfe,0x48,  0x00,0x9c,0xfe,0x49,  0x00,0xa0,0xfe,0x4a,  0x00,0xa6,0xfe,0x4b,  0x00,0xa8,0xfe,0x4c,  0x00,0xae,0xfe,0x4d,  0x00,0xb2,0xfe,0x4e,  0x00,0xb5,0xfe,0x4f,  
  0x00,0xba,0xfe,0x50,  0x00,0xbd,0xfe,0x51,  0x00,0xc1,0xfd,0x52,  0x00,0xc4,0xfd,0x53,  0x00,0xc6,0xfd,0x54,  0x00,0xcb,0xfc,0x55,  0x00,0xce,0xfc,0x56,  0x01,0xd2,0xfb,0x57,  
  0x01,0xd4,0xfb,0x58,  0x04,0xd9,0xfa,0x59,  0x05,0xdc,0xf9,0x5a,  0x05,0xdd,0xf8,0x5b,  0x07,0xe2,0xf7,0x5c,  0x06,0xe3,0xf6,0x5d,  0x08,0xe5,0xf4,0x5e,  0x09,0xe8,0xf3,0x5f,  
  0x0c,0xea,0xf1,0x60,  0x0e,0xeb,0xef,0x61,  0x0f,0xef,0xed,0x62,  0x10,0xf1,0xea,0x63,  0x12,0xf3,0xe8,0x64,  0x17,0xf4,0xe7,0x65,  0x17,0xf6,0xe3,0x66,  0x1a,0xf7,0xe1,0x67,  
  0x1e,0xf8,0xdf,0x68,  0x20,0xf9,0xdc,0x69,  0x24,0xfa,0xd9,0x6a,  0x26,0xfb,0xd5,0x6b,  0x29,0xfb,0xd1,0x6c,  0x2e,0xfc,0xcf,0x6d,  0x30,0xfc,0xcc,0x6e,  0x35,0xfd,0xc7,0x6f,  
  0x36,0xfd,0xc3,0x70,  0x3c,0xfd,0xbf,0x71,  0x40,0xfe,0xbd,0x72,  0x41,0xfe,0xb9,0x73,  0x47,0xfe,0xb6,0x74,  0x4b,0xfe,0xb0,0x75,  0x4f,0xfe,0xad,0x76,  0x51,0xfe,0xaa,0x77,  
  0x57,0xfe,0xa4,0x78,  0x5b,0xfe,0xa2,0x79,  0x5f,0xfe,0x9e,0x7a,  0x61,0xfe,0x99,0x7b,  0x67,0xfe,0x96,0x7c,  0x6b,0xfe,0x92,0x7d,  0x6f,0xfe,0x8d,0x7e,  0x71,0xff,0x88,0x7f,  
  0x77,0xff,0x87,0x80,  0x7b,0xff,0x83,0x81,  0x7f,0xff,0x7f,0x82,  0x83,0xff,0x7b,0x83,  0x87,0xff,0x77,0x84,  0x8a,0xfe,0x71,0x85,  0x8e,0xfe,0x6f,0x86,  0x92,0xfe,0x6b,0x87,  
  0x96,0xfe,0x67,0x88,  0x98,0xfe,0x61,0x89,  0x9e,0xfe,0x5f,0x8a,  0xa2,0xfe,0x5b,0x8b,  0xa4,0xfe,0x57,0x8c,  0xaa,0xfe,0x51,0x8d,  0xad,0xfe,0x4f,0x8e,  0xb2,0xfe,0x4b,0x8f,  
  0xb6,0xfe,0x47,0x90,  0xb9,0xfe,0x41,0x91,  0xbd,0xfd,0x40,0x92,  0xc0,0xfd,0x3c,0x93,  0xc4,0xfd,0x36,0x94,  0xc8,0xfc,0x35,0x95,  0xcc,0xfc,0x30,0x96,  0xcf,0xfb,0x2e,0x97,  
  0xd1,0xfb,0x29,0x98,  0xd5,0xfa,0x27,0x99,  0xd9,0xf9,0x24,0x9a,  0xdb,0xf8,0x20,0x9b,  0xdf,0xf7,0x1e,0x9c,  0xe1,0xf6,0x1a,0x9d,  0xe3,0xf4,0x18,0x9e,  0xe7,0xf3,0x17,0x9f,  
  0xe8,0xf1,0x12,0xa0,  0xeb,0xef,0x11,0xa1,  0xed,0xed,0x0f,0xa2,  0xef,0xe9,0x0e,0xa3,  0xf1,0xe9,0x0c,0xa4,  0xf3,0xe7,0x09,0xa5,  0xf4,0xe3,0x08,0xa6,  0xf6,0xe2,0x06,0xa7,  
  0xf7,0xdf,0x07,0xa8,  0xf8,0xdc,0x05,0xa9,  0xf9,0xd9,0x05,0xaa,  0xfa,0xd6,0x04,0xab,  0xfb,0xd3,0x01,0xac,  0xfb,0xcf,0x01,0xad,  0xfc,0xcc,0x00,0xae,  0xfc,0xc8,0x00,0xaf,  
  0xfd,0xc4,0x00,0xb0,  0xfd,0xc1,0x00,0xb1,  0xfd,0xbd,0x00,0xb2,  0xfe,0xba,0x00,0xb3,  0xfe,0xb6,0x00,0xb4,  0xfe,0xb2,0x00,0xb5,  0xfe,0xae,0x00,0xb6,  0xfe,0xaa,0x00,0xb7,  
  0xfe,0xa6,0x00,0xb8,  0xfe,0xa2,0x00,0xb9,  0xfe,0x9e,0x00,0xba,  0xfe,0x9a,0x00,0xbb,  0xfe,0x96,0x00,0xbc,  0xfe,0x92,0x00,0xbd,  0xfe,0x8e,0x00,0xbe,  0xfe,0x8a,0x00,0xbf,  
  0xff,0x87,0x00,0xc0,  0xff,0x83,0x00,0xc1,  0xff,0x7f,0x00,0xc2,  0xff,0x7b,0x00,0xc3,  0xff,0x77,0x00,0xc4,  0xfe,0x73,0x00,0xc5,  0xfe,0x6f,0x00,0xc6,  0xfe,0x6b,0x00,0xc7,  
  0xfe,0x66,0x00,0xc8,  0xfe,0x63,0x00,0xc9,  0xfe,0x5f,0x00,0xca,  0xfe,0x5b,0x00,0xcb,  0xfe,0x57,0x00,0xcc,  0xfe,0x53,0x00,0xcd,  0xfe,0x4f,0x00,0xce,  0xfe,0x4b,0x00,0xcf,  
  0xfe,0x45,0x00,0xd0,  0xfe,0x41,0x00,0xd1,  0xfd,0x40,0x00,0xd2,  0xfd,0x3a,0x00,0xd3,  0xfd,0x38,0x00,0xd4,  0xfc,0x33,0x00,0xd5,  0xfc,0x30,0x00,0xd6,  0xfb,0x2e,0x00,0xd7,  
  0xfa,0x2b,0x00,0xd8,  0xf9,0x26,0x00,0xd9,  0xf8,0x22,0x00,0xda,  0xf7,0x21,0x00,0xdb,  0xf6,0x1e,0x00,0xdc,  0xf5,0x1c,0x00,0xdd,  0xf3,0x17,0x00,0xde,  0xf1,0x16,0x00,0xdf,  
  0xf0,0x14,0x00,0xe0,  0xee,0x10,0x00,0xe1,  0xec,0x10,0x00,0xe2,  0xe9,0x0d,0x00,0xe3,  0xe7,0x0c,0x00,0xe4,  0xe4,0x0b,0x00,0xe5,  0xe1,0x09,0x00,0xe6,  0xdf,0x06,0x00,0xe7,  
  0xdb,0x07,0x00,0xe8,  0xd8,0x06,0x00,0xe9,  0xd5,0x05,0x00,0xea,  0xd2,0x04,0x00,0xeb,  0xce,0x01,0x00,0xec,  0xca,0x03,0x00,0xed,  0xc6,0x01,0x00,0xee,  0xc3,0x00,0x00,0xef,  
  0xbf,0x00,0x00,0xf0,  0xbb,0x01,0x00,0xf1,  0xb7,0x00,0x00,0xf2,  0xb2,0x00,0x00,0xf3,  0xae,0x00,0x00,0xf4,  0xaa,0x00,0x00,0xf5,  0xa6,0x00,0x00,0xf6,  0xa2,0x00,0x00,0xf7,  
  0x9d,0x00,0x00,0xf8,  0x99,0x00,0x00,0xf9,  0x94,0x00,0x00,0xfa,  0x90,0x00,0x00,0xfb,  0x8c,0x00,0x00,0xfc,  0x87,0x00,0x00,0xfd,  0x83,0x00,0x00,0xfe,  0x7f,0x00,0x00,0xff
]

const AsymmetricBlueGreenDivergent_colormap=[
0.000000,0.098039,0.301961,0.211765,
0.020000,0.109804,0.321569,0.219608,
0.050000,0.121569,0.349020,0.231373,
0.075000,0.141176,0.380392,0.247059,
0.100000,0.160784,0.411765,0.262745,
0.133000,0.184314,0.450980,0.278431,
0.166000,0.215686,0.490196,0.290196,
0.200000,0.258824,0.541176,0.305882,
0.233000,0.317647,0.588235,0.337255,
0.266000,0.341176,0.639216,0.333333,
0.300000,0.392157,0.678431,0.333333,
0.333000,0.478431,0.721569,0.360784,
0.366000,0.572549,0.760784,0.388235,
0.400000,0.647059,0.800000,0.415686,
0.425000,0.725490,0.839216,0.454902,
0.450000,0.788235,0.870588,0.494118,
0.475000,0.847059,0.890196,0.533333,
0.500000,0.901961,0.921569,0.588235,
0.525000,0.941176,0.933333,0.639216,
0.550000,0.960784,0.952941,0.729412,
0.575000,0.988235,0.980392,0.811765,
0.595000,1.000000,0.996078,0.921569,
0.600000,1.000000,1.000000,0.968627,
0.600000,0.968627,1.000000,0.996078,
0.610000,0.921569,1.000000,0.996078,
0.633000,0.803922,0.980392,0.972549,
0.666000,0.666667,0.941176,0.941176,
0.700000,0.584314,0.882353,0.909804,
0.733000,0.517647,0.792157,0.858824,
0.766000,0.450980,0.686275,0.788235,
0.800000,0.380392,0.592157,0.721569,
0.833000,0.333333,0.501961,0.650980,
0.866000,0.286275,0.427451,0.600000,
0.900000,0.258824,0.368627,0.560784,
0.933000,0.227451,0.317647,0.521569,
0.960000,0.203922,0.270588,0.490196,
0.980000,0.188235,0.239216,0.458824,
1.000000,0.172549,0.203922,0.431373];

function gray_opaque_colormap(){

  var colormap=[];

  var N=256;
  for (var I=0;I<N;I++)
  {
    var alpha=I/(N-1.0);

    colormap.push(alpha);
    colormap.push(alpha);
    colormap.push(alpha);
    colormap.push(1.0);
  }

  //console.log(colormap);

  return colormap;

}

function gray_transparent_colormap(){

  var colormap=[];

  var N=256;
  for (var I=0;I<N;I++)
  {
    var alpha=I/(N-1.0);

    colormap.push(alpha);
    colormap.push(alpha);
    colormap.push(alpha);
    colormap.push(alpha*alpha);
  }

  //console.log(colormap);

  return colormap;

}