namespace LoginReg2.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PasswordConfirmation { get; set; }
    }
      public class Login
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}