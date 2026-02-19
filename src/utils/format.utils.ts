/**
 * General formatting utilities.
 */
export function formatNumber(value: number, decimals = 0): string {
  return value.toFixed(decimals);
}

export function formatCurrency(amount: number, currency = 'INR'): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDistance(km: number): string {
  return `${formatNumber(km)} KM`;
}
