class StudentsController < ApplicationController
   def new
      @dojo = Dojo.find(params[:id])
      @dojoAll = Dojo.all
   end
   def create
      Student.create(newStudent)
      redirect_to '/dojos/'+params[:id].to_s
   end
   def edit
      @student = Student.find(params[:student_id])
      @dojo = Dojo.find(params[:id])
      @dojos = Dojo.all
   end
   def update
      student = Student.find(params[:student_id])
      student.update(newStudent)
      redirect_to '/dojos/'+params[:id].to_s
   end
   def show
      @student = Student.find(params[:student_id])
      @dojo = Dojo.find(params[:id])
      @students = Student.where(dojo:Dojo.find(params[:id])).where.not(id:params[:student_id])
   end
   def delete
      student = Student.find(params[:student_id])
      student.destroy
      redirect_to '/dojos/'+params[:id].to_s
   end
   private
      def newStudent
         params.require(:student).permit(:first_name,:last_name,:email).merge(dojo:Dojo.find(params[:student][:dojo]))
      end
end
