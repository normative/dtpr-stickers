/* eslint-disable import/prefer-default-export */
import QRCode from 'qrcode-svg';

export function getQRCodeSvg(
  content: string,
  config: { [name: string]: number | string | boolean } = {},
) {
  const qrCode = new QRCode({
    content,
    padding: 4,
    width: 256,
    height: 256,
    color: '#000000',
    background: 'transparent',
    ecl: 'M',
    xmlDeclaration: false,
    join: true,
    ...config,
  });
  return qrCode.svg();
}
