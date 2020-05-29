export const deliveryTimes = [
    {
      label: '1 Week',
      value: '7'
    },
    {
      label: '2 Weeks',
      value: '14'
    },
    {
      label: '1 Month',
      value: '30'
    },
    {
      label: 'More',
      value: '-1'
    },
  ];

export const convertIDR = (price) => {
  return `Rp ${price.toLocaleString('id-ID')}`
}

export const summaryDescription = (texts) => {
  return texts.length > 114 ? `${texts.substring(0, 114)}...` : texts
}