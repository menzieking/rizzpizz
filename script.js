// Function to get random screen position
function getRandomPosition() {
  const width = window.screen.width - 400;  // Window width
  const height = window.screen.height - 400; // Window height
  
  return `width=400,height=400,left=${Math.floor(Math.random() * width)},top=${Math.floor(Math.random() * height)}`;
}

// Open new windows every second
setInterval(() => {
  window.open('rizzpizz.vercel.app', '_blank', getRandomPosition());
}, 1000);
