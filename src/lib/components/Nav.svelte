<nav class="navbar navbar-expand-lg navbar-dark bg-transparent py-2">
	<div class="container">
		<a class="navbar-brand d-flex align-items-center" href="/">
			<svg class="brand-logo" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#7C3AED"></stop>
						<stop offset="100%" stop-color="#06B6D4"></stop>
					</linearGradient>
					<linearGradient id="logoGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
						<stop offset="0%" stop-color="#06B6D4"></stop>
						<stop offset="100%" stop-color="#22C55E"></stop>
					</linearGradient>
					<filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
						<feGaussianBlur stdDeviation="2" result="blur"></feGaussianBlur>
						<feMerge>
							<feMergeNode in="blur"></feMergeNode>
							<feMergeNode in="SourceGraphic"></feMergeNode>
						</feMerge>
					</filter>
				</defs>
				<g filter="url(#logoGlow)">
					<path d="M24 4L42 14V34L24 44L6 34V14L24 4Z" stroke="url(#logoGrad1)" stroke-width="2" fill="none" opacity="0.6"></path>
					<path d="M24 12L34 18V30L24 36L14 30V18L24 12Z" stroke="url(#logoGrad2)" stroke-width="2" fill="rgba(124,58,237,0.15)"></path>
					<circle cx="24" cy="24" r="4" fill="url(#logoGrad1)"></circle>
					<path d="M24 20V12M24 28V36" stroke="url(#logoGrad2)" stroke-width="1.5" opacity="0.8"></path>
					<path d="M20.5 22L14 18M27.5 26L34 30" stroke="url(#logoGrad1)" stroke-width="1.5" opacity="0.8"></path>
					<path d="M27.5 22L34 18M20.5 26L14 30" stroke="url(#logoGrad2)" stroke-width="1.5" opacity="0.8"></path>
					<circle cx="24" cy="12" r="2" fill="#7C3AED"></circle>
					<circle cx="34" cy="18" r="2" fill="#06B6D4"></circle>
					<circle cx="34" cy="30" r="2" fill="#22C55E"></circle>
					<circle cx="24" cy="36" r="2" fill="#06B6D4"></circle>
					<circle cx="14" cy="30" r="2" fill="#7C3AED"></circle>
					<circle cx="14" cy="18" r="2" fill="#22C55E"></circle>
				</g>
			</svg>
			<span class="brand-name">FERRUM DATA WORKS</span>
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="nav">
			<ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
				<li class="nav-item"><a class="nav-link text-muted-2" href="/solutions">Solutions</a></li>
				<li class="nav-item"><a class="nav-link text-muted-2" href="/how-it-works">How it works</a></li>
				<li class="nav-item"><a class="nav-link text-muted-2" href="/security">Security</a></li>
				<li class="nav-item"><a class="nav-link text-muted-2" href="/contact">Contact</a></li>
				<li class="nav-item ms-lg-2">
					<a class="btn btn-outline-soft rounded-pill px-3" href="/contact">Talk to an engineer</a>
				</li>
				<li class="nav-item ms-lg-2">
					<a class="btn btn-gradient rounded-pill px-3" href="/contact">Get started</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
