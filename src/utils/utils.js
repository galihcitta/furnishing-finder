export const deliveryTimes = [
    {
      label: '1 week',
      value: '7'
    },
    {
      label: '2 weeks',
      value: '14'
    },
    {
      label: '1 month',
      value: '30'
    },
    {
      label: 'more',
      value: '-1'
    },
  ];

export const convertIDR = (price) => {
  return `Rp ${price.toLocaleString('id-ID')}`
}

export const summaryDescription = (texts) => {
  return texts.length > 114 ? `${texts.substring(0, 114)}...` : texts
}