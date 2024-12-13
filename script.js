
document.addEventListener("DOMContentLoaded", () => {
  const profileElement = document.querySelector(".profile");
  const boxshadowElement = document.querySelector(".boxshadow");

  // First IntersectionObserver for profile and boxshadow animations
  const profileObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the relevant animation class based on the element
          entry.target.classList.add(entry.target.classList.contains('profile') ? 'slide-in-left' : 'slide-in-botright');

          // Stop observing the element after animation is triggered
          profileObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible in the viewport
    }
  );

  // Start observing both profile and boxshadow elements
  if (profileElement) profileObserver.observe(profileElement);
  if (boxshadowElement) profileObserver.observe(boxshadowElement);

  // Second IntersectionObserver for all status bar animations
  const statusBars = document.querySelectorAll('.activity1, .activity2, .activity3'); // Select the correct status bar elements

  if (statusBars.length === 0) {
    console.error("No status bars found.");
    return;
  }

  const statusBarObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the animation when the status bar enters the viewport
          // Add the specific class for each status bar based on its class
          if (entry.target.classList.contains('activity1')) {
            entry.target.classList.add('fill-status-bar1');
          } else if (entry.target.classList.contains('activity2')) {
            entry.target.classList.add('fill-status-bar2');
          } else if (entry.target.classList.contains('activity3')) {
            entry.target.classList.add('fill-status-bar3');
          }

          // Stop observing after the animation is triggered
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Trigger when at least 50% of the element is visible
    }
  );

  // Start observing all the status bar elements
  statusBars.forEach((statusBar) => {
    statusBarObserver.observe(statusBar);
  });
});

