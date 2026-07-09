// Injects two soft ambient glow blobs used for depth behind the content.
// Actual drift animation is handled in CSS (see css/bg.css .bg-blob).
(function () {
  const root = document.getElementById('particles') || document.body;

  const blob1 = document.createElement('div');
  blob1.className = 'bg-blob b1';

  const blob2 = document.createElement('div');
  blob2.className = 'bg-blob b2';

  root.appendChild(blob1);
  root.appendChild(blob2);
})();
