export function getDomain(url: string) {
  var hostname;
  if (url.indexOf('://') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }
  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];

  if (hostname.startsWith('www.')) {
    hostname = hostname.slice(4);
  }
  return hostname;
}

export function formatNumberWithK(num: number): string {
  if (num >= 1000) {
    let numWithDecimal = num / 1000;
    let formattedNum = numWithDecimal.toFixed(1);
    if (formattedNum.endsWith('.0')) {
      formattedNum = formattedNum.slice(0, -2);
    }
    return formattedNum + 'k';
  }
  return num.toString();
}
