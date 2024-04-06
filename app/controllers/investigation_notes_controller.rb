class InvestigationNotesController < ApplicationController
    before_action :authenticate_officer!
    before_action :set_investigation
    before_action :set_investigation_note, only: [:show, :edit, :update, :destroy]
  
    def new
      @investigation_note = @investigation.investigation_notes.new
    end
  
    def create
      @investigation_note = @investigation.investigation_notes.new(investigation_note_params)
      @investigation_note.officer = current_officer
  
      if @investigation_note.save
        flash[:notice] = "Successfully added investigation note."
        redirect_to investigation_path(@investigation_note.investigation)
      else
        render :new, locals: { investigation: @investigation }
      end
    end
  
    private
  
    def set_investigation
      @investigation = Investigation.find(params[:investigation_id])
    end
  
    def set_investigation_note
      @investigation_note = InvestigationNote.find(params[:id])
    end
  
    def investigation_note_params
      params.require(:investigation_note).permit(:content)
    end
  end
  