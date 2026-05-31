type Session = {
  preferences: string[];
  cart: any[];
  history: string[];
};

const sessions = new Map<string, Session>();

export function getSession(tableId: string) {
  if (!sessions.has(tableId)) {
    sessions.set(tableId, {
      preferences: [],
      cart: [],
      history: []
    });
  }

  return sessions.get(tableId)!;
}