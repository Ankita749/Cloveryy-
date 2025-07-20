const messages = [
  "Hii king,",
  "It's Gulab jamun.",
  "Congrats for ur Offer letter.",
  "I wish You achieve everything you want.",
  "This stupid likes few things about you.",
  "You look good while smiling.",
  "You have a good sense of humour.",
  "You are stupid in few things.",
  "A bit innocent.",
  "Like to see ur name in notification.",
  "You r like fire — if u come closer, I’ll burn, if u go far, I feel cold.",
  "This stupid will never misuse anything against you.",
  "You can trust her.",
  "Bye cLOVE."
];

function showMessage() {
  const box = document.getElementById("message-box");
  const random = Math.floor(Math.random() * messages.length);
  box.innerText = messages[random];
}
