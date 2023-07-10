function HobbyLinks() {
    const hobbyLinks = [
      'https://www.pickleheads.com/blog/pickleball-tips',
      'https://www.netflix.com/',
      'https://intl.thisisneverthat.com/'
    ];
  
    return (
      <div>
        <a href={hobbyLinks[0]}>{hobbyLinks[0]}</a>
        <br />
        <a href={hobbyLinks[1]}>{hobbyLinks[1]}</a>
        <br />
        <a href={hobbyLinks[2]}>{hobbyLinks[2]}</a>
      </div>
    );
  }
  
  export default HobbyLinks;