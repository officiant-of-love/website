import fbLogo from './assets/facebook-logo.svg';
import instaLogo from './assets/instagram-logo.svg'

const Social = () => {
  return (
    <div className="flex flex-row justify-center pt-10 my-auto">
      <a href="https://www.facebook.com/officiantoflove/" target="_blank" rel="noreferrer"><img src={fbLogo} className="h-16" alt="facebook logo"/></a>
      <h3 className="text-3xl mx-5 my-auto text-center">Connect with me <br></br>on socials!</h3>
      <a href="https://www.instagram.com/officiantoflove/" target="_blank" rel="noreferrer"><img src={instaLogo} className="h-16" alt="instagram logo"/></a>
    </div>
  );
};

export default Social;
