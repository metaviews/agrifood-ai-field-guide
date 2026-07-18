# Industry Activity in North America and Europe — July 2026

**Status.** Fifth and sixth regional scans combined. Distinct from the prior scans in *purpose*: the prior scans balanced mainstream / institutional / critical; these scans lean toward **industry activity** because the field guide's stance is *curious, critical, and collaborative* — and the curious side has been under-populated.

**Scope.** North America (US row-crop, US specialty crop, US dairy, US food processing, US retail) and Europe (EU equipment makers, EU precision agriculture platforms, EU livestock robotics, EU post-harvest technology).

**Method.** Pull concrete vendor deployments with named figures, trace deployment models, surface where the activity actually sits in the value chain. Critical lenses and policy instruments referenced where relevant, not as the primary subject.

**Cutoff.** Active in the last year.

**Note on bias.** Vendor sources report favourable numbers. Every figure cited here is vendor-reported unless explicitly stated otherwise. The discipline I used in the Agrosmart unit applies — cite the figure, name the source, flag the independent-verification gap.

---

## 1. North America industry activity

### 1.1 John Deere — See & Spray and the precision spraying pattern

The largest row-crop vendor story of the last two years. John Deere's *See & Spray* technology, launched 2021, uses boom-mounted cameras and onboard processors to scan over 2,500 square feet per second at up to 15 mph, identifying weeds and triggering individual spray nozzles via Deere's ExactApply system.

**Concrete figures from John Deere / Precision Farming Dealer (November 2025):**
- Used across more than 5 million acres during the 2025 growing season (larger than the state of New Jersey).
- Average ~50% reduction in non-residual herbicide use — vendor-reported.
- ~31 million gallons of herbicide mix saved — vendor-reported.
- 2 bushel/acre average yield bump in seven-state trials (Mississippi, Nebraska, Arkansas, Indiana, North Carolina, Virginia, Tennessee) — John Deere-commissioned research.
- 2025 introduced the *Application Savings Guarantee* — farmers pay per acre only when the technology delivers measurable savings. Cost model: $1/fallow acre or $5/in-crop acre.

**Deployment model:** equipment-integrated (factory or precision upgrade kit on R-series and 400/600 sprayers). Industrial-scale row-crop, North American context dominant.

**Why it matters for talks.** See & Spray is the most concrete deployed example of computer-vision-driven input reduction in row crops. The 50% herbicide figure is the kind of headline number talks lean on; the unit must cite the source and flag the verification gap. The Application Savings Guarantee is a notable commercial design — vendor cost aligned with measured benefit, which is rare and worth understanding.

### 1.2 Bayer Climate FieldView — the multi-continent platform

Bayer's Climate FieldView is the most geographically-spread digital farming platform. Bayer positions it as the data layer that unifies farm equipment, sensors, and decision support. As of mid-2026 the platform has been launched in the US (originating market), Brazil, Canada, Argentina, Germany, France, Spain, Italy, Ukraine, Romania, Hungary, Poland, South Africa, Kenya, and other markets — a substantial international footprint.

**The interesting structural fact.** Climate FieldView is *not* a precision spraying system — it's a data aggregation and decision-support platform. Bayer sells it alongside its seeds and crop protection products. The data layer feeds the input vendor's R&D and sales.

**Why it matters for talks.** FieldView is the canonical example of an *input vendor* (Bayer is one of the Big Three agrichemical / seed companies) owning the farm data layer. This is exactly the configuration the IPES-Food critical frame names as concerning — data flows from farm to input vendor, and the input vendor has every incentive to use it. Worth surfacing in talks without flattening to "Bayer is bad" — the platform genuinely does useful farm-level work; the structural question is separate.

### 1.3 Indigo Ag — biologicals plus digital, with a complicated recent history

Indigo Ag, founded 2014, operates a biological seed and foliar treatment business alongside a digital agriculture platform (Indigo Atlas, Indigo Marketplace). The biological side uses machine learning to identify microbial strains that confer crop resilience.

**Recent history worth knowing about.** Indigo raised hundreds of millions in 2017–2018, peaked at valuation ~$3.5B, then ran into financial trouble in 2023 — laid off significant workforce and pivoted away from Indigo Marketplace (the digital grain marketplace). As of mid-2026 the company is operational but smaller than peak.

**Why it matters for talks.** Indigo is a real example of the *boom-bust pattern* in venture-funded agritech. Useful for the "industry activity is real but not all of it succeeds" frame — and the kind of caveat that demonstrates field-guide honesty. The biologicals + ML combination remains interesting scientifically; the digital marketplace experiment was the failure.

### 1.4 Apeel Sciences — post-harvest coating plus ripening AI

Apeel Sciences, California-based food tech company founded 2012, uses plant-based coatings to slow dehydration and oxidation in fresh produce (avocados, citrus, cucumbers, mangoes). The coatings are derived from natural plant materials — fats and lipids found in peels, seeds, and pulp.

**Concrete figures from Apeel (vendor-reported, via Sustainable Brands, 2025):**
- Since 2021: 166 million pieces of fruit saved from waste.
- 29,100 metric tons CO₂-equivalent avoided.
- 6.96 billion litres of water conserved.
- *RipeTrack* — AI-powered digital platform that measures ripeness throughout supply chain, gives retailers / suppliers / packers real-time visibility.

**Deployment model shift.** Apeel initially worked *retailer-facing*, then explicitly shifted to *grower / packer / shipper-facing* — recognising that the upstream supply chain has more influence over freshness outcomes. A rare explicit pivot from downstream to upstream; useful to mention.

**Why it matters for talks.** Apeel is the strongest North American example of AI + biology hybrid in post-harvest. RipeTrack sits in the `distribution-and-retail × computer-vision × supply-chain-efficiency` cell. The vendor figures are eye-catching and need verification framing.

### 1.5 US row-crop / equipment — additional context

- **CNH Industrial** (Case IH, New Holland) — autonomous tractor development, including the Case IH autonomous tractor concept.
- **AGCO PTx** — precision agriculture portfolio launched 2024 (see Europe section for detail; AGCO is US-headquartered with strong European presence).
- **Indigo Ag, Pivot Bio, Sound Agriculture** — venture-funded biological and digital soil-health plays; some financial struggles.
- **Cargill, ADM** — global traders experimenting with AI for supply chain optimisation.
- **Elanco, Merck Animal Health** — livestock pharmaceutical companies with AI-driven monitoring products (Cainthus was acquired by Elanco).

This is a partial list. The US row-crop / equipment activity is large; the scan captures the most prominent names.

---

## 2. Europe industry activity

### 2.1 Taranis — the Israeli-origin aerial imagery platform

Taranis, founded 2014 in Israel, operates a precision agriculture intelligence platform using drone-captured leaf-level imagery plus satellite and plane imagery, processed through TensorFlow-based ML models trained on tens of millions of tagged images.

**Concrete figures from Taranis / Google Cloud case study:**
- More than 20 million acres managed using its intelligence platform.
- Active in Israel, US, Russia, Eastern Europe, South America (Argentina, Brazil).
- 30-person agronomy team tagging images to train ML models.
- Each drone flight collects ~10,000 images, 10–20MB each.

**Deployment model:** drone-captured imagery uploaded to Google Cloud, ML models run on TensorFlow, insights delivered to farmers / agronomists. Cross-continental scale. Industrial and large-farm.

**Why it matters for talks.** Taranis is the strongest non-EU example of European-origin (Israeli) agritech with global deployment. Useful contrast with Chinese drone manufacturers (DJI, XAG) — different business model (services vs hardware), similar technical substrate.

### 2.2 xFarm Technologies — the European precision agriculture scale-up

xFarm Technologies, Italian tech company founded 2017 by farmer Matteo Vanotti, provides a digital farm management platform.

**Concrete figures from xFarm:**
- 600,000 farms supported.
- 9 million hectares.
- 100+ countries.
- 50+ supply chains.

**Deployment model:** smartphone / PC platform, multiple modules (precision agriculture, farm management, documentation, sensors, analytics, supply chain integration). Notable because xFarm explicitly positions as *started by farmers, for farmers* — small European farms were the initial design target, not adapted American-style software.

**Why it matters for talks.** xFarm is one of the few European platform plays at meaningful scale. The "started by farmers, for farmers" framing is structurally different from the Loblaw / Agrosmart / Bayer pattern — closer to the *farmer-led* deployment model that VISION says we should track, even though xFarm is a venture-funded company (so actor-type is `vendor`, not `farmer-led`). Worth surfacing because the rhetorical positioning doesn't always match the structural classification.

### 2.3 AGCO PTx — the multi-brand retrofit pattern

AGCO, US-headquartered but with major European operations (Fendt, Massey Ferguson, Valtra), launched the PTx precision agriculture portfolio in April 2024. PTx includes Precision Planting (acquired 2024) and PTx Trimble (joint venture with Trimble).

**Distinctive design choice.** PTx is explicitly *brand-agnostic* — designed to work across mixed fleets. AGCO sells retrofits that work on competitor equipment. This is structurally different from Deere's locked-in approach (See & Spray only works on Deere sprayers) and from Climate FieldView's vendor-specific positioning.

**Why it matters for talks.** The retrofit / mixed-fleet pattern is the practical answer to the *vendor lock-in* critique. Whether it succeeds in the market (vs Deere's vertical integration) is an open question worth tracking. AGCO's commitment to the model is itself a signal — industry players see lock-in backlash as a market force.

### 2.4 Lely and DeLaval — the European dairy robotics dominance

Lely (Netherlands, family business) and DeLaval (Sweden / Tetra Laval) dominate the European robotic milking market. Lely's Astronaut and DeLaval's VMS systems are the two named products most discussed.

**Why it matters for talks.** Dairy automation is the cell of the matrix where European industry has the most decisive lead. The robotic milking systems are deployed at scale across European dairy farms; the contrast with the JD pig / Shengmu dairy / Open AI / Cainthus livestock work in other regions is meaningful. Dairy automation is also the rare agricultural AI application where labour displacement is a *headline* consequence rather than a footnote — worth naming.

### 2.5 CLAAS, Pöttinger, Ploeger — the European equipment-maker cluster

European agricultural equipment makers (CLAAS Germany, Pöttinger Austria, Ploeger Netherlands) are extending precision agriculture functionality into their harvesters, balers, and implements. The equipment is increasingly sensor-equipped and AI-augmented, generally for guidance and operation optimisation rather than autonomous decision-making.

**Distinctive feature.** European equipment makers tend to cooperate more openly on data standards (e.g. ADAPT, ISOBUS) than US counterparts. This shows up in mixed-fleet compatibility and farmer data portability. Worth naming because the data interoperability story is structurally different in Europe than in North America.

---

## 3. Cross-region observations

### 3.1 The deployment model spectrum, populated

The earlier regional scan named deployment models (cloud-mediated, vertically integrated, cooperative-mediated, etc.). With this scan, the spectrum is more concretely populated:

- **Equipment-integrated (vendor):** John Deere See & Spray, CLAAS / Pöttinger precision harvesters
- **Equipment-retrofit (vendor, brand-agnostic):** AGCO PTx
- **Vertically integrated platform:** JD Farm (China), Blue River Technology → Deere
- **Cloud-mediated platform:** Alibaba ET Agricultural Brain, Climate FieldView
- **Drone-captured imagery + ML:** Taranis, Chinese drone manufacturers (DJI, XAG)
- **Smartphone-default platform, often SME / smallholder:** xFarm, Agrosmart, Kilimo
- **Specialised post-harvest / processing:** Apeel, TOMRA, Augury
- **Retail-led consumer-facing:** Loblaw (Canada), Walmart / Instacart / Afresh (US, less surfaced in our sources)

This is more granular than the earlier taxonomy but useful for talks — when the question is *how* the technology is being used, the deployment model often matters more than the technology itself.

### 3.2 The market structure observation

Three different market structures are visible in this scan:

- **Equipment-vendor lock-in (Deere pattern):** the technology is bundled with the equipment; data flows to the vendor. See & Spray is the canonical example. Compatible with FTC-Deere-style right-to-repair critique.
- **Input-vendor data layer (Bayer pattern):** the platform aggregates farm data and feeds the input vendor's R&D. Climate FieldView. Compatible with IPES-Food critical frame.
- **Independent platform (xFarm / Agrosmart / Taranis pattern):** the platform is independent of equipment or input vendors. More compatible with farmer-led or cooperative-mediated frames; structurally less entrenched.

These are real market structures, not theoretical. They shape what data flows where, what lock-in looks like, and what alternative paths exist.

### 3.3 What's under-surfaced in this scan

- **US row-crop autonomous machinery beyond Deere** — Case IH, AGCO autonomous concepts exist but operational deployment is sparse. The hype > reality gap is worth naming.
- **US specialty crop AI** — strawberry / leafy greens / orchard automation. Companies exist (Advanced Farm Technologies, FarmWise) but small relative to row-crop.
- **US livestock AI at scale** — Cargill, Elanco, JBS, Tyson all have announced AI initiatives but operational scale and impact data is thin.
- **US food processing AI** — TOMRA, Key Technology, Ellab — material handling, sorting, traceability. Under-surfaced.
- **EU post-harvest / food processing beyond Apeel** — TOMRA is a major player in optical sorting, headquartered in Norway; should be a unit. Worth next pass.
- **EU retail consumer AI** — Carrefour, Tesco, Picnic, Ocado — sparse in our sources.
- **Industry-association work** — CEMA (European Agricultural Machinery Association), AgFunder, World Agri-Tech. CEMA was referenced in the EP study; worth a dedicated unit.

### 3.4 The vendor-figure verification gap

Across both North America and Europe, the vendor-reported figures are central:

- See & Spray: 5M acres, 50% herbicide reduction (Deere, November 2025)
- Climate FieldView: deployment in 15+ countries (Bayer, ongoing)
- Taranis: 20M acres (Google Cloud / Taranis)
- xFarm: 600k farms, 9M ha, 100+ countries (xFarm)
- Apeel: 166M fruit saved, 29,100 t CO₂ avoided (Apeel)

The discipline going forward: cite the figure, name the vendor source, flag the independent-verification gap. Independent verification at scale for any of these is hard to come by. The unit carries this honestly.

---

## 4. Industry-specific contested claims and gaps

Industry-side additions to the existing contested-claim and gap lists:

- **C-016 (new):** "Precision spraying (See & Spray pattern) reduces herbicide use by ~50%." Vendor-reported; trial results show 2 bu/acre yield bump in seven states. Independent verification at multi-vendor / multi-region scale not surfaced.
- **C-017 (new):** "AI-driven digital farming platforms benefit farmers independent of the input vendor's commercial interest." Counter (IPES-Food frame, Monsalve/Seufert): the structural data flow favours the input vendor.
- **G-017 (new):** US row-crop autonomous machinery operational scale beyond Deere. Announcements exceed deployments.
- **G-018 (new):** US specialty crop AI at scale (strawberry, leafy greens, orchard).
- **G-019 (new):** EU post-harvest / food processing AI (TOMRA optical sorting, Ellab, Key Technology) beyond Apeel.
- **G-020 (new):** Independent verification of vendor-reported input-reduction figures at scale (See & Spray 50%, Climate FieldView, Taranis, xFarm, Apeel).

---

## 5. Sources

Read in full or substantial part:

- Precision Farming Dealer (2025). *Farmers Use John Deere See & Spray Across 5 Million Acres in 2025*. November 11, 2025. https://www.precisionfarmingdealer.com/articles/6834-farmers-use-john-deere-see-and-spray-across-5-million-acres-in-2025
- Bayer Crop Science. *Climate FieldView™ platform*. https://www.cropscience.bayer.us/tools/fieldview
- Indigo Ag corporate site. https://www.indigoag.com/
- Google Cloud (Taranis case study). https://cloud.google.com/customers/taranis
- xFarm Technologies corporate site. https://www.xfarm.ag/en/the-company
- AGCO. *Precision Agriculture*. https://www.agcocorp.com/int/en/home/precision-agriculture.html
- CLAAS. *Smart Farming*. https://www.claas.com/en-us/smart-farming
- Lely corporate site. https://www.lely.com/
- Buckley, Scarlett (2025). *Food Protecting Food: How Apeel Keeps Produce Fresher for Longer*. Sustainable Brands.
- Taranis acquisition and platform pages. https://www.taranis.com/newsroom/

Cross-references to earlier scans (IPES-Food, FIAN, Monsalve/Seufert) remain valid as critical-frame anchors.