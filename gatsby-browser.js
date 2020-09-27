import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
    `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
