class UsersController < ApplicationController
  def new
    #
    render :new
  end

  def create
    @user = User.new(user_params)
    @user.ensure_session_token
    @user.password = user_params[:password]
    if @user.save!
      login_user!(@user)
      redirect_to :cats
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end
  private

  def user_params
    params.require(:user).permit(:user_name, :password, :session_token)
  end
end
