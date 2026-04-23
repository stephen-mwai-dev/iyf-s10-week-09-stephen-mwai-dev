export const africanNames = [
  "Stephen Njuguna", "Mercy Njeri", "Wyclif Ochieng", "Yahya Said",
  "Grace Wamboi", "John Mwangi", "Mary Atieno", "David Otieno",
  "Fatma Mussa", "Lucy Achieng", "Eric Onyango", "Irene Akumu",
  "Samuel Opiyo", "Elizabeth Anyango", "Musa Aden"
];

export function nameForId(id) {
  if (!id || isNaN(Number(id))) return africanNames[0];
  return africanNames[(id-1) % africanNames.length];
}