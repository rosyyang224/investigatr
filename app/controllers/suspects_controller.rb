class SuspectsController < ApplicationController
    before_action :set_investigation, only: [:new, :create, :terminate]
  
    def new
      @suspect = @investigation.suspects.new
      @current_suspects = @investigation.suspects.where(dropped_on: nil)
    end
  
    def create
      @suspect = @investigation.suspects.new(suspect_params)
      if @suspect.save
        flash[:notice] = "Successfully added suspect."
        redirect_to investigation_path(@investigation)
      else
        render :new
      end
    end
  
    def terminate
      @suspect = Suspect.find(params[:id])
      @suspect.update(dropped_on: Date.current)
      redirect_to investigation_path(@suspect.investigation)
    end
  
    private
  
    def set_investigation
      @investigation = Investigation.find(params[:investigation_id])
    end
  
    def suspect_params
      params.require(:suspect).permit(:criminal_id, :investigation_id, :added_on)
    end
  end
  