
import { Youtube, Gamepad2, Clapperboard } from "lucide-react";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { AmbientBackground } from "@/components/liquid-glass/AmbientBackground";

const BeyondWork = () => (
<section id="beyond-work" className="section-padding relative overflow-hidden">
<AmbientBackground />
<div className="section-container">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Work</h2>
<p className="text-muted-foreground">Gaming, content creation and video production.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<LiquidGlass className="p-6"><Gamepad2 className="mb-3"/><h3 className="font-semibold">Variety Gamer</h3><p className="text-sm text-muted-foreground">Streaming and gaming content focused on Valorant, PUBG and other titles.</p></LiquidGlass>
<LiquidGlass className="p-6"><Clapperboard className="mb-3"/><h3 className="font-semibold">Video Editing</h3><p className="text-sm text-muted-foreground">Adobe Premiere Pro, After Effects, thumbnails and short-form content creation.</p></LiquidGlass>
<LiquidGlass className="p-6"><Youtube className="mb-3"/><h3 className="font-semibold">YouTube Channel</h3><a className="text-primary break-all" href="https://www.youtube.com/@Vapourclips" target="_blank" rel="noopener noreferrer">youtube.com/@Vapourclips</a></LiquidGlass>
</div></div></section>);
export default BeyondWork;
