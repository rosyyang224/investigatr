class SessionsController < ApplicationController
    def new
    end

    def create
        officer = Officer.find_by_username(params[:username])
        if officer && officer.authenticate(params[:password])
            session[:officer_id] = officer.id
            # flash[:notice] = "Officer is logged in."
            redirect_to home_path, notice: "Logged in!"
        else
            # flash.now[:alert] = "Invalid username or password"
            flash.now.alert = "Username and/or password is invalid"
            render action: 'new'
        end
    end

    def destroy
        session[:officer_id] = nil
        # flash[:notice] = "Logged out!"
        redirect_to home_path, notice: "Logged out!"
    end
end