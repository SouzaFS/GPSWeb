interface HideShowPasswordProps {
  isPasswordHidden: boolean;
  togglePasswordVisibility: () => void;
}

export function HideShowPassword({ isPasswordHidden, togglePasswordVisibility }: HideShowPasswordProps) {
    return (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          aria-label={isPasswordHidden ? "Show password" : "Hide password"}
          className="flex justify-center items-center"
        >
          <img
            src={isPasswordHidden ? "/eye-regular.svg" : "/eye-slash-regular.svg"}
            alt={isPasswordHidden ? "Show password" : "Hide password"}
            className="opacity-50 h-4"
          />
        </button>
      )
}
