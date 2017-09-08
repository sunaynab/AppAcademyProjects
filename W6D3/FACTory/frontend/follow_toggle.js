const APIUtil = require('./api_utils.js');

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userID = $el.data('user-id');
    this.followState = $el.data('follow-state');

    this.render();
    this.handleClick();
  }

  static allFTogButtons() {
    return $('.follow-toggle');
  }

  static getAllFTogs() {
    const $all = FollowToggle.allFTogButtons();

    return $all.map((idx, el) => {
      new FollowToggle($(el));
    });
  }

  render() {
    const btnText = this.followState === "unfollowed" ? 'Follow!' : 'Unfollow!';
    this.$el.text(btnText);
  }

  toggle() {
    const updatedStatus = this.followState === 'followed' ? 'unfollowed' : 'followed';

    this.followState = updatedStatus;
    this.render();
  }

  laugh() {
    console.log('hahahaha');
  }

  handleClick() {
    this.$el.on('click', (e) => {
      debugger;
      let success;
      const id = this.userID;

      if (this.followState === 'unfollowed') {
        success = APIUtil.followUser(id);
      } else if (this.followState === 'followed') {
        success = APIUtil.unfollowUser(id);
      }

      if (success) {
        this.toggle();
      }
    });
  }

  // handleClick() {
  //   this.$el.on('click', (e) => {
  //     e.preventDefault();
  //
  //     let method = null;
  //     if (this.followState === "unfollowed") {
  //       method = "Post";
  //     } else {
  //       method = "Delete";
  //     }
  //
  //     $.ajax({
  //       url: `/users/${this.userID}/follow`,
  //       type: method,
  //       dataType: "JSON",
  //       success: this.toggle.bind(this),
  //       error: this.laugh
  //     });
  //   });
  // }
}

module.exports = FollowToggle;
