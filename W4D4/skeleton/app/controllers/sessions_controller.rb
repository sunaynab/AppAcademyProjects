class SessionsController < ApplicationController
  def new
    render :new
  end

  # def create
  #   @user = User.find_by_credentials(
  #     user_name: params[:user_name],
  #     password: params[:password_digest])
  #   @user.reset_session_token!
  #   redirect_to :cats, action: :get
  # end

  def create
    @user = User.find_by_credentials(user_params[:user_name],
      user_params[:password])
    if @user
      login_user!(@user)
      redirect_to cats_url
    else
      flash[:errors] << ['Invalid username or password.']
      render :new
    end
  end

  def destroy
    @current_user.reset_session_token! if @current_user
    session[:session_token] = nil
  end

  private
  def user_params
    params.require(:user).permit(:user_name, :password, :session_token)
  end
end
