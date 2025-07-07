<script lang="ts">
	import { onMount } from 'svelte';

	let { width = $bindable(), height = $bindable() } = $props();

	type ShapeType = 'circle' | 'square' | 'triangle' | 'hexagon' | 'pentagon';

	class Shape {
		public static random() {
			const types: ShapeType[] = ['circle', 'square', 'triangle', 'hexagon', 'pentagon'];
			const type = types[Math.floor(Math.random() * types.length)];
			const x = Math.random() * width;
			const y = Math.random() * height;
			const size = Math.random() * 60 + 10; // Size between 10 and 60
			const dx = (Math.random() - 0.5) * 0.5; // Random speed in x direction
			const dy = (Math.random() - 0.5) * 0.5; // Random speed in y direction
			const t = Math.random() * 2 * Math.PI; // Random initial angle
			const w = (Math.random() - 0.5) * 0.01; // Random rotation speed
			const color = Math.floor(Math.random() * 360); // Random HSL color
			const dcolor = (Math.random() - 0.5) * 0.01; // Random color change speed
			return new Shape(type, x, y, size, dx, dy, w, color, dcolor);
		}

		private type: ShapeType;
		private x: number;
		private y: number;
		private size: number;
		private dx: number; // Delta x for movement
		private dy: number; // Delta y for movement
		private t: number; // Theta for rotation
		private dt: number; // Rotation speed
		private color: number; // HSL color value
		private dcolor: number; // Color change speed

		constructor(
			type: ShapeType,
			x: number,
			y: number,
			size: number,
			dx: number,
			dy: number,
			w: number,
			color: number,
			dcolor: number
		) {
			this.type = type;
			this.x = x;
			this.y = y;
			this.size = size;
			this.dx = dx;
			this.dy = dy;
			this.t = 0;
			this.dt = w;
			this.color = color;
			this.dcolor = dcolor;
		}

		update() {
			this.x += this.dx;
			this.y += this.dy;
			this.t += this.dt;
			this.color += this.dcolor;
			if (this.x < -this.size) this.x = width + this.size;
			if (this.x > width + this.size) this.x = -this.size;
			if (this.y < -this.size) this.y = height + this.size;
			if (this.y > height + this.size) this.y = -this.size;
		}

		draw() {
			if (!ctx) return;
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.t);

			// Nice striped outline.
			ctx.strokeStyle = '#ffffff50';
			ctx.lineWidth = 1;

			switch (this.type) {
				case 'circle':
					ctx.beginPath();
					ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
					ctx.stroke();
					ctx.closePath();
					break;
				case 'square':
					ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
					break;
				case 'triangle':
					ctx.beginPath();
					ctx.moveTo(0, -this.size / 2);
					ctx.lineTo(this.size / 2, this.size / 2);
					ctx.lineTo(-this.size / 2, this.size / 2);
					ctx.closePath();
					ctx.stroke();
					break;
				case 'hexagon':
				case 'pentagon':
					const sides = this.type === 'hexagon' ? 6 : 5;
					const angle = (Math.PI * 2) / sides;
					ctx.beginPath();
					for (let i = 0; i < sides; i++) {
						const x = (this.size / 2) * Math.cos(i * angle);
						const y = (this.size / 2) * Math.sin(i * angle);
						if (i === 0) ctx.moveTo(x, y);
						else ctx.lineTo(x, y);
					}
					ctx.closePath();
					ctx.stroke();
					break;
			}

			ctx.restore();
		}
	}

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let shapes = $state<Shape[]>([]);

	function resize() {
		if (!canvas) return;
		width = canvas.width = window.innerWidth;
		height = canvas.height = window.innerHeight;
	}

	function initShapes() {
		shapes = Array.from({ length: 15 }, () => Shape.random());
	}

	function animate() {
		if (!ctx) return;

		ctx.clearRect(0, 0, width, height);

		for (let i = 0; i < shapes.length; i++) {
			const shape = shapes[i];
			shape.update();
			shape.draw();
		}

		requestAnimationFrame(animate);
	}

	onMount(() => {
		if (!canvas) {
			return;
		}

		ctx = canvas.getContext('2d');
		resize();
		initShapes();
		animate();

		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
			ctx = null;
			canvas = null;
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="fixed inset-0 -z-1 pointer-events-none"
	style="view-transition-name: canvas-bg"
></canvas>
