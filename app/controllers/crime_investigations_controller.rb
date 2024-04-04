class CrimeInvestigationsController < ApplicationController
    before_action :set_investigation
    before_action :set_crimes_list, only: [:new, :create]
  
    def new
      @crime_investigation = @investigation.crime_investigations.build
    end
  
    def create
      @crime_investigation = @investigation.crime_investigations.build(crime_investigation_params)
      if @crime_investigation.save
        flash[:notice] = "Successfully added #{crime_investigation.crime.name} to #{crime_investigation.investigation.title}."
        redirect_to investigation_path(@investigation)
      else
        render :new
      end
    end
  
    def destroy
      @crime_investigation = CrimeInvestigation.find(params[:id])
      if @crime_investigation.destroy
        flash[:notice] = "Successfully removed a crime from this investigation."
      else
        flash[:alert] = "Failed to remove a crime from this investigation."
      end
      redirect_to investigation_path(@investigation)
    end
  
    private
  
    def set_investigation
      @investigation = Investigation.find(params[:investigation_id])
    end
  
    def set_crimes_list
      @crimes_list = Crime.all
    end
  
    def crime_investigation_params
      params.require(:crime_investigation).permit(:crime_id)
    end
  end
  