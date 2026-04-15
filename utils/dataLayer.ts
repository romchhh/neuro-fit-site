export type DataLayerPayload = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerPayload[];
  }
}

/** Події для GTM: `event` + довільні поля (без PII). */
export function pushDataLayer(payload: DataLayerPayload): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}
