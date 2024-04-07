class CrimeInvestigationsController < ApplicationController
<<<<<<< HEAD
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
=======
    before_action :set_crime_investigation, only: [:show, :edit, :update, :destroy]
    before_action :check_login
    authorize_resource
  
    def new
        @crime_investigation = CrimeInvestigation.new
        @investigation = Investigation.find(params[:investigation_id])
        @crimes_list = Crime.all - @investigation.crimes
    end
  
    def create
      @crime_investigation = CrimeInvestigation.new(crime_investigation_params)
      if @crime_investigation.save
          flash[:notice] = "Successfully added #{@crime_investigation.crime.name} to #{@crime_investigation.investigation.title}."
          redirect_to investigation_path(CrimeInvestigation.last.investigation)
      else
          render action: 'new', locals: { investigation: @crime_investigation.investigation, crimes_list: @crimes_list }
>>>>>>> dev4
      end
    end
  
    def destroy
<<<<<<< HEAD
      @crime_investigation = CrimeInvestigation.find(params[:id])
      if @crime_investigation.destroy
        flash[:notice] = "Successfully removed a crime from this investigation."
      else
        flash[:alert] = "Failed to remove a crime from this investigation."
      end
      redirect_to investigation_path(@investigation)
=======
      @crime_investigation.destroy
      flash[:notice] = "Successfully removed a crime from this investigation."
      redirect_to investigation_path(@crime_investigation.investigation)
>>>>>>> dev4
    end
  
    private
  
<<<<<<< HEAD
    def set_investigation
      @investigation = Investigation.find(params[:investigation_id])
    end
  
    def set_crimes_list
      @crimes_list = Crime.all
    end
  
    def crime_investigation_params
      params.require(:crime_investigation).permit(:crime_id)
=======
    def set_crime_investigation
      @crime_investigation = CrimeInvestigation.find(params[:id])
    end
  
    def crime_investigation_params
        params.require(:crime_investigation).permit(:crime_id, :investigation_id)
>>>>>>> dev4
    end
  end
  