const planets = ["Sun", "Mercury", "Venus", "Moon", "Mars", "Jupiter", "Neptun", "Saturn", "Uranus", "Pluto"]

export const renderPlanet = planets.map((planet)=>{
    return (<option value={planet} key={planet}>{planet}</option>)
  })