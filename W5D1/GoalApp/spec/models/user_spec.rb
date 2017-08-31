require 'rails_helper'

describe User do
  let!(:user){
    User.create(username: 'sunayna', password: 'sunayna')
  }
  it 'can be found by correct username and password' do
    expect(User.find_by_credentials('sunayna', 'sunayna')).to eq(user)
  end

  it 'does not save password to the database' do
    user = User.find_by(username: 'sunayna')
    expect(user.password).not_to be('sunayna')
  end

  it 'uses BCrypt to encrypt the password' do
    expect(BCrypt::Password).to receive(:create)
    
  end


  it {should validate_presence_of(:username)}
  it {should validate_presence_of(:session_token)}
  it {should validate_length_of(:password).is_at_least(6)}
end
