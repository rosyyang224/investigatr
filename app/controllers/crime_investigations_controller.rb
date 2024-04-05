class CrimeInvestigationsController < ApplicationController
    before_action :set_crime_investigation, only: [:show, :edit, :update, :destroy]
  
    def new
        @crime_investigation = CrimeInvestigation.new
        @investigation = Investigation.find(params[:investigation_id])
        @crimes_list = Crime.all - @investigation.crimes
    end
  
    def create
      @crime_investigation = @investigation.crime_investigations.build(crime_investigation_params)
      if @crime_investigation.save
        flash[:notice] = "Successfully added crime to investigation."
        redirect_to investigation_path(@investigation)
      else
        @crimes_list = Crime.all
        render :new
      end
    end
  
    def destroy
      @crime_investigation.destroy
      flash[:notice] = "Successfully removed crime from investigation."
      redirect_to investigation_path(@investigation)
    end
  
    private
  
    def set_investigation
      @investigation = Investigation.find(params[:investigation_id])
    end
  
    def set_crime_investigation
      @crime_investigation = @investigation.crime_investigations.find(params[:id])
    end
  
    def crime_investigation_params
      params.require(:crime_investigation).permit(:crime_id)
    end
  end
  