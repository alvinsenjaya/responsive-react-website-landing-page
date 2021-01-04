import styled from 'styled-components';
import Particles from 'react-particles-js';

const ParticleBackground = () => {
  return (
    <StyledParticles
      params={{
        particles: {
          number: {
            value: 100,
            limit: 100,
            density: { 
              enable: true, 
              value_area: 1000,
            }
          },
          line_linked: {
            enable: true,
            opacity: 0.3,
            color: "#01e486"
          },
          move: {
            direction: 'random',
            speed: 3,
            out_mode: 'out',
          },
          color: {
            value: '#fff'
          },
          size: {
            value: 0
          },
        },
        interactivity: {
	        events: {
            onhover: {
	            enable: true,
	              mode: 'grab'
	          },
	          onclick: {
	            enable: true,
	              mode: 'push'
	          }
          },
          modes: {
            push: {
              particles_nb: 2,
            },
          }
        },
        retina_detect: true
      }} 
    />
  );
  
}

export default ParticleBackground;

const StyledParticles = styled(Particles)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`