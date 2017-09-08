const APIUtil = {
  followUser: (id) => {
    const method = 'post';

    $.ajax({
      url: `/users/${id}/follow`,
      type: method,
      dataType: "JSON",
      success: function() { return true; },
      error: () => false
    });
  },

  unfollowUser: (id) => {
    const method = 'delete';

    $.ajax({
      url: `/users/${id}/follow`,
      type: method,
      dataType: "JSON",
      success: () => true,
      error: () => false
    });
  },
};

module.exports = APIUtil;
