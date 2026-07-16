"""Regenerate assets/files/brandon-chen-cv.pdf after editing the CV data below."""
from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "files" / "brandon-chen-cv.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

# EDIT ONLY THIS SECTION
CV = {
    "name": "Brandon Chen",
    "headline": "Student Researcher | Urban GNSS | Navigation | Intelligent Transport",
    "email": "chen.brandon1213@gmail.com",
    "location": "Hong Kong",
    "linkedin": "linkedin.com/in/brandon-chen-gnss",
    "orcid": "0009-0007-6761-0259",
    "profile": "High-school student researcher interested in urban GNSS, resilient navigation, robotics, and transport engineering. Focused on positioning challenges in dense cities and on translating technical research into practical systems.",
    "experience": [
        ("Apr-Aug 2026", "Independent Researcher - IPN Lab", "Research activity centred on GNSS and urban navigation."),
        ("2026", "Stairio Project", "Hardware and mechanical component development for an autonomous staircase inspection robot."),
        ("Ongoing", "Independent Technical Study", "GNSS datasets, receiver outputs, urban navigation, robotics, and engineering communication."),
    ],
    "education": "IB Diploma Programme - HL Mathematics AA, Physics, Economics; SL Chemistry, Chinese B, English Language and Literature.",
    "interests": "Urban GNSS; resilient navigation; intelligent transport; robotics; multi-sensor positioning; transport engineering.",
}

NAVY, BLUE, RED, IVORY, GREY = map(HexColor, ["#161B40", "#2D3B97", "#D3313A", "#FAF7F1", "#474C63"])
doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=48, leftMargin=48, topMargin=42, bottomMargin=42,
                        title=f"{CV['name']} - Curriculum Vitae", author=CV["name"])
styles = {
    "name": ParagraphStyle("name", fontName="Times-Bold", fontSize=29, leading=32, textColor=NAVY),
    "headline": ParagraphStyle("headline", fontName="Helvetica-Bold", fontSize=9, leading=13, textColor=BLUE, spaceAfter=5),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=13, textColor=GREY, alignment=TA_RIGHT),
    "section": ParagraphStyle("section", fontName="Times-Bold", fontSize=15, leading=18, textColor=NAVY, spaceBefore=14, spaceAfter=7),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=14, textColor=GREY),
    "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=NAVY),
    "date": ParagraphStyle("date", fontName="Courier-Bold", fontSize=7.5, leading=11, textColor=RED),
}

story = []
header = Table([
    [Paragraph(CV["name"], styles["name"]), Paragraph(f'{CV["email"]}<br/>{CV["location"]}<br/>{CV["linkedin"]}<br/>ORCID {CV["orcid"]}', styles["contact"])],
    [Paragraph(CV["headline"], styles["headline"]), ""],
], colWidths=[335, 164])
header.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LINEBELOW", (0, 1), (-1, 1), 2, RED), ("BOTTOMPADDING", (0, 1), (-1, 1), 12)]))
story += [header, Paragraph("PROFILE", styles["section"]), Paragraph(CV["profile"], styles["body"])]
story.append(Paragraph("EXPERIENCE", styles["section"]))
for date, role, detail in CV["experience"]:
    item = Table([[Paragraph(date.upper(), styles["date"]), Paragraph(role, styles["role"])], ["", Paragraph(detail, styles["body"])]], colWidths=[90, 409])
    item.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("BOTTOMPADDING", (0, 1), (-1, 1), 9)]))
    story.append(KeepTogether(item))
story += [Paragraph("EDUCATION", styles["section"]), Paragraph(CV["education"], styles["body"]),
          Paragraph("RESEARCH INTERESTS", styles["section"]), Paragraph(CV["interests"], styles["body"]), Spacer(1, 12)]

def footer(canvas, _doc):
    canvas.saveState(); canvas.setFillColor(BLUE); canvas.rect(0, 0, A4[0], 18, fill=1, stroke=0)
    canvas.setFont("Helvetica", 7); canvas.setFillColor(HexColor("#FFFFFF")); canvas.drawString(48, 6, "Brandon Chen - Curriculum Vitae")
    canvas.restoreState()

doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUT)
