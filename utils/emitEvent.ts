type Detail = {
  whoId: number;
}

export type CustomEventDetail = {
  detail: Detail;
}

export default function emitEvent(eventName: string, detail: Detail ) {
  const event = new CustomEvent(eventName, {
    detail
  });
  document.dispatchEvent(event);
} 
