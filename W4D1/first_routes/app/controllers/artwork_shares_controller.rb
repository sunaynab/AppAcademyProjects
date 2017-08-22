class ArtworkSharesController < ApplicationController
  def create
    @artworkshares = ArtworkShare.new(artworkshares_params)
    if @artworkshares.save
      render json: @artworkshares
    else
      render json: @artworkshares.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @artworkshares = ArtworkShare.find(params[:id])
    @artworkshares.destroy
    render json: @artworkshares
  end

  private

  def artworkshares_params
    params.require(:artworkshare).permit(:artwork_id, :viewer_id)
  end
end
