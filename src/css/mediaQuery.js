const size = {
  "zero": "0px",
  "phone": "480px",
  "portrait": "600px",
  "landscape": "900px",
  "laptop": "1200px",
  "desktop": "1600px",
  "television": "1800px",
  "projector": "2560px"
}

export const device = {
  zero: `(min-width: ${size.zero})`,
  phone: `(min-width: ${size.phone})`,
  portrait: `(min-width: ${size.portrait})`,
  landscape: `(min-width: ${size.landscape})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  television: `(min-width: ${size.television})`,
  projector: `(min-width: ${size.projector})`
};
