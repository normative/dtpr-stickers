import QRCode from 'qrcode';

// eslint-disable-next-line import/prefer-default-export
export async function getQRCodeSrc(qrCodeUrl, onSuccess, onError) {
  try {
    const qrCodeSrc = await QRCode.toDataURL(qrCodeUrl);
    onSuccess(qrCodeSrc);
  } catch (e) {
    onError(e);
  }
}
