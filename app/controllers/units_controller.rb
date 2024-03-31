class UnitsController < ApplicationController
    before_action :set_unit, only: [:show, :edit, :update, :destroy]

    def index
        @active_units = Unit.where(active: true)
        @inactive_units = Unit.where(active: false)
    end
    
    def show
        @unit = Unit.find(params[:id])
        @officers = @unit.officers.active.alphabetical
    end
    
    def new
        @unit = Unit.new
    end
    
    def create
        @unit = Unit.new(unit_params)
        if @unit.save
            flash[:notice] = "Successfully added " + @unit.name + " to GCPD."
            redirect_to units_path
        else
            render action: 'new'
        end
    end
    
    def edit
    end
    
    def update
        @unit = Unit.find(params[:id])
        if @unit.update(unit_params)
            redirect_to unit_path(@unit)
        else
            render action: 'edit'
        end
    end
    
    def destroy
        @unit = Unit.find(params[:id])
        if @unit.destroy
            flash[:notice] = "Removed " + @unit.name + " from the system."
            redirect_to units_path
        else
            render action: 'index'
        end
    end
    
    private
    
    def set_unit
        @unit = Unit.find(params[:id])
    end
    
    def unit_params
        params.require(:unit).permit(:name, :active)
    end
end