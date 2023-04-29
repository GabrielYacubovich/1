﻿
function randomSpaceFact() {
  const randomIndex = Math.floor(Math.random() * spaceFacts.length);
  
  return spaceFacts[randomIndex];
}

var spaceFacts = [
  "The Sun makes up about 99.86% of the total mass of the Solar System.",
  "The largest known star is UY Scuti, about 1,708 times larger than the Sun.",
  "The Milky Way galaxy is around 100,000 light-years in diameter.",
  "There are about 100 to 200 billion galaxies in the observable universe.",
  "The Hubble Space Telescope was launched in 1990 and has made over 1.3 million observations.",
  "Light from the Sun takes approximately 8 minutes and 20 seconds to reach Earth.",
  "The speed of light is approximately 299,792 kilometers per second.",
  "The Moon is slowly moving away from Earth at a rate of about 3.8 centimeters per year.",
  "The first human-made object to enter space was the German V-2 rocket in 1944.",
  "The first human-made satellite, Sputnik 1, was launched by the Soviet Union on October 4, 1957.",
  "The International Space Station orbits Earth at an altitude of about 400 kilometers.",
  "The ISS travels at a speed of approximately 28,000 kilometers per hour.",
  "Neil Armstrong set foot on the Moon on July 20, 1969.",
  "The first human spaceflight occurred on April 12, 1961, when Yuri Gagarin orbited Earth once.",
  "Valeri Polyakov holds the record for the longest continuous time spent in space, staying in orbit for 437 days from 1994 to 1995.",
  "The Mars rover Opportunity operated on the surface of Mars from 2004 to 2019.",
  "A day on Mars is 24 hours and 39 minutes, only slightly longer than a day on Earth.",
  "Jupiter has the shortest day of any planet in the Solar System, rotating completely in just under 10 hours.",
  "The largest volcano in the Solar System is Olympus Mons on Mars.",
  "The Great Red Spot on Jupiter is a storm that has been raging for at least 400 years.",
  "Neptune has the strongest winds in the Solar System, reaching speeds of up to 2,100 kilometers per hour.",
  "The hottest planet in the Solar System is not Mercury, but Venus, due to its thick atmosphere.",
  "The dwarf planet Pluto was discovered by Clyde Tombaugh in 1930.",
  "A light-year is the distance light travels in one year, approximately 9.46 trillion kilometers.",
  "Astronauts on the ISS experience 16 sunrises and sunsets every 24 hours.",
  "The first woman in space was Valentina Tereshkova, who orbited Earth in 1963.",
  "Only 12 people have walked on the Moon.",
  "The Voyager 1 probe, launched in 1977, is the most distant human-made object from Earth.",
  "Black holes are regions of spacetime with gravitational forces so strong that nothing can escape them.",
  "The Oort Cloud is a hypothesized sphere of icy objects that surrounds the Solar System.",
  "The Andromeda Galaxy, our closest large galactic neighbor, is about 2.537 million light-years away.",
  "Saturn has the most extensive planetary ring system in the Solar System.",
  "The first photograph of Earth from space was taken in 1946 using a V-2 rocket.",
  "Astronauts grow taller in space due to the reduced gravitational force on their spines.",
"The term 'astronaut' comes from Greek words that mean 'star' and 'sailor'.",
"There is no sound in space because sound waves require a medium to travel through, and space is a vacuum.",
"The asteroid belt is located between the orbits of Mars and Jupiter.",
"The closest star to Earth, after the Sun, is Proxima Centauri, at a distance of about 4.24 light-years.",
"Venus rotates in the opposite direction of most planets in the Solar System.",
"The highest mountain on Earth, Mount Everest, is about 29,029 feet tall, while Mars' Olympus Mons stands at 69,841 feet.",
"The Apollo 13 mission, launched in 1970, suffered an explosion in its service module but managed to return safely to Earth.",
"The first spacewalk was performed by cosmonaut Alexei Leonov in 1965.",
"Ganymede, one of Jupiter's moons, is the largest moon in the Solar System.",
"The North Star, Polaris, is located almost directly above Earth's North Pole.",
"The Big Bang theory suggests that the universe began as an infinitely dense and hot point, and has been expanding ever since.",
"The James Webb Space Telescope, launched in 2021, is the successor to the Hubble Space Telescope.",
"The planet with the most moons in the Solar System is Jupiter, with 79 known moons.",
"The Kuiper Belt is a region of space beyond Neptune that contains many small icy bodies.",
"The first reusable spacecraft, the Space Shuttle, was introduced by NASA in 1981.",
"The highest temperature ever recorded on the Moon is 260 degrees Fahrenheit (127 degrees Celsius) during lunar daytime.",
"The lowest temperature ever recorded on the Moon is -280 degrees Fahrenheit (-173 degrees Celsius) during lunar nighttime.",
"The force of gravity on Mars is only about 38% of that on Earth.",
"SpaceX's Falcon Heavy rocket, first launched in 2018, is one of the most powerful rockets in the world.",
"Comets are made up of ice, dust, and rocky materials and are often referred to as 'dirty snowballs'.",
"Saturn's moon Titan has liquid hydrocarbon lakes and rivers on its surface.",
"A supernova is the explosion of a star at the end of its life cycle.",
"Dark matter is an invisible form of matter that is thought to make up about 27% of the universe's mass.",
"Dark energy, a mysterious force causing the expansion of the universe to accelerate, makes up about 68% of the universe's energy density.",
"Neutron stars are incredibly dense remnants of massive stars, with a mass about 1.4 times that of the Sun but only 20 kilometers in diameter.",
"White dwarf stars are the remnants of low- and medium-mass stars, which have exhausted their nuclear fuel.",
"The Drake Equation is a formula used to estimate the number of potentially communicative extraterrestrial civilizations in our galaxy.",
"The first animals sent into space were fruit flies aboard a U.S.-launched V-2 rocket in 1947.",
"The first living creatures to survive a trip to space and return to Earth were two dogs, Belka and Strelka, in 1960.",
"The Crab Nebula is the remnant of a supernova explosion observed by Chinese astronomers in 1054.",
"The Earth's atmosphere is composed of approximately 78% nitrogen, 21% oxygen, and trace amounts of other gases.",
"An aurora is a natural light display caused by charged particles from the Sun colliding with Earth's magnetic field and atmosphere.",
"The average temperature of the universe is about 2.73 Kelvin (-270.42 degrees Celsius, -454.76 degrees Fahrenheit).",
"The greenhouse effect occurs when solar radiation is absorbed by a planet's atmosphere, trapping heat and increasing surface temperatures.",
"The first telescope was invented by Dutch mathematician and astronomer Hans Lippershey in 1608.",
"Galileo Galilei was the first person to use a telescope for astronomical purposes, discovering Jupiter's four largest moons in 1610.",
"An exoplanet is a planet that orbits a star outside of our Solar System.",
"The first confirmed exoplanet discovery was made in 1992.",
"The Kepler Space Telescope, launched in 2009, discovered thousands of exoplanets during its mission.",
"Our Sun is classified as a G-type main-sequence star, also known as a yellow dwarf.",
"A pulsar is a highly magnetized, rotating neutron star that emits beams of electromagnetic radiation.",
"Magnetars are a type of neutron star with extremely powerful magnetic fields, up to a billion times stronger than those of typical neutron stars.",
"A parsec is a unit of distance used in astronomy, equivalent to about 3.26 light-years.",
"A red dwarf is a small, cool star that has a longer lifespan than larger, hotter stars like our Sun.",
"A brown dwarf is a celestial object that is not massive enough to sustain nuclear fusion, making it too large to be considered a planet but too small to be considered a star.",
"The Kuiper Belt Object Eris is more massive than Pluto, which contributed to the redefinition of the term 'planet' and the eventual demotion of Pluto to a dwarf planet.",
"The first interstellar object detected passing through our Solar System, named 'Oumuamua, was discovered in 2017.",
"Pioneer 10, launched in 1972, was the first spacecraft to fly by Jupiter.",
"The Cassini-Huygens mission, a collaboration between NASA, ESA, and ASI, studied Saturn and its moons from 2004 to 2017.",
"The Perseverance rover, launched in 2020, is searching for signs of ancient life and collecting samples for a future Mars sample return mission.",
"The Sun's corona is an aura of plasma that surrounds the star and extends millions of kilometers into space.",
"Solar flares are brief eruptions of intense high-energy radiation from the Sun's surface, which can disrupt communication systems on Earth.",
"A solar eclipse occurs when the Moon passes between the Sun and Earth, casting a shadow on Earth's surface.",
"The Cosmic Microwave Background (CMB) is the residual radiation from the Big Bang, which can still be detected throughout the universe.",
"The Event Horizon Telescope is a global network of radio telescopes that captured the first-ever image of a black hole in 2019.",
"A quasar is an extremely luminous and distant active galactic nucleus powered by a supermassive black hole.",
"The Fermi Paradox asks why, given the high probability of extraterrestrial life, we have not yet observed any signs of it.",
];

export { spaceFacts };

export { randomSpaceFact };


