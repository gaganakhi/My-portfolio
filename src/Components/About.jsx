export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">About me</h2>

        <div className="bg-lightbg p-8 rounded-xl shadow border">
          <p className="text-secondary leading-relaxed">
            I’m a QA Engineer specializing in Manual and Automation Testing. 
            Skilled in Selenium, Java, writing test cases, identifying bugs, 
            and ensuring high-quality product delivery.
          </p>

          <ul className="list-disc pl-6 mt-4 text-secondary space-y-1">
            <li>Responsive UI</li>
            <li>Automation (Selenium + Java)</li>
            <li>Reusable components</li>
            <li>Testing & performance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
