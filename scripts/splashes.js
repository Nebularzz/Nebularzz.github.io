function randomSplash() {
	let splashes = [
    "hello world",
    "shhhhhhhhhhhhhhhh",
    "ziguana",
    "sayfd",
    "ziggy blud",
    "autistic",
    "hs.hpo",
    "follow me on the socials",
    "make stuff",
    "unprofessional",
    "not a web developer",
    "noob",
  ]
  let index = Math.floor(Math.random() * splashes.length)
  return splashes[index]
}

document.getElementById("splash").innerText = "oph.sh - " + randomSplash()
