class SnoreBubbleImage extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
 
  render() {
    return (
      <div>
        <button onClick={(props.onDragonClick) => this.setState({
          isVisible: !this.state.isVisible
        })}>
          $("#dragon-click-image").click(function() {
    $(this).find('img').toggle();
});

<div id="dragon-click-image"><img src="./images/dragonimage.png" width="60px" height="60px"/>
<img src="https://goo.gl/4z81vo" width="60px" height="60px" style="display:none"/>
</div>
        </button>
        <br />
        { this.state.isVisible ? (
          <img src="https://goo.gl/4z81vo" />
        ) : null }
      </div>
    );
  }
}

export default SnoreBubbleImage;