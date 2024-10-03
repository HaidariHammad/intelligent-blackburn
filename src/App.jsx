import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  Target,
  Database,
  Search,
  FolderOpen,
  Link,
  BarChart2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const slides = [
  {
    title: "Microsoft Syntex Implementation Lifecycle",
    subtitle: "Enhancing Content Intelligence in the Enterprise",
    type: "cover",
    backgroundColor: "#F5F5F5",
    primaryColor: "#2563EB", //  A nice dark blue
    secondaryColor: "#90CAF9",
    iconColor: "#2563EB",
  },
  {
    title: "Setup & Configuration",
    content:
      "Install and configure Microsoft Syntex, ensuring seamless integration with Microsoft 365 and SharePoint environments.",
    keyFocus:
      "Technical configuration, model setup, and system preparation for intelligent document processing.",
    icon: Settings,
    backgroundColor: "#F8F8F8",
    primaryColor: "#3498DB", //  Lighter blue
    secondaryColor: "#4B5563",
    iconColor: "#FFC107", //  Yellow
  },
  {
    title: "Target Selection",
    content:
      "Strategically select initial documents for implementation, focusing on high-impact areas.",
    keyFocus:
      "Identifying crucial documents to demonstrate Syntex's transformative potential.",
    icon: Target,
    backgroundColor: "#F2F2F2",
    primaryColor: "#2196F3", //  Light blue
    secondaryColor: "#90CAF9", // Lighter blue
    iconColor: "#FF6384", // Pink
  },
  {
    title: "Data Extraction",
    content:
      "Leverage Syntex's AI capabilities to extract valuable data from selected documents.",
    keyFocus:
      "Utilizing AI-driven models for intelligent metadata and key information extraction.",
    icon: Database,
    backgroundColor: "#F5F5F5",
    primaryColor: "#FF5722", // A vibrant orange
    secondaryColor: "#FFEB3B", // Yellow
    iconColor: "#00BCD4", //  Light blue
  },
  {
    title: "Search Optimization",
    content:
      "Enhance search efficiency and accuracy using the extracted metadata and content understanding.",
    keyFocus:
      "Improving content discoverability and relevance in document libraries.",
    icon: Search,
    backgroundColor: "#F8F8F8",
    primaryColor: "#673AB7", // A purply-blue
    secondaryColor: "#00BCD4",
    iconColor: "#4CAF50", //  Green
  },
  {
    title: "Document Organization",
    content:
      "Restructure document libraries leveraging Syntex-extracted metadata for improved navigation.",
    keyFocus:
      "Implementing intelligent categorization and tagging for streamlined content management.",
    icon: FolderOpen,
    backgroundColor: "#F2F2F2",
    primaryColor: "#9C27B0", //  Purply-pink
    secondaryColor: "#4B5563",
    iconColor: "#FFEB3B", // Yellow
  },
  {
    title: "Data Integration",
    content:
      "Centralize extracted data in SQL Azure for comprehensive content intelligence.",
    keyFocus:
      "Creating a unified data repository for advanced analytics and reporting.",
    icon: Link,
    backgroundColor: "#F5F5F5",
    primaryColor: "#90CAF9", // A lighter blue
    secondaryColor: "#2196F3", // Light blue
    iconColor: "#FFC107", // Yellow
  },
  {
    title: "Dashboard Creation",
    content:
      "Generate insightful visual dashboards using Tableau and the centralized SQL Azure data.",
    keyFocus:
      "Transforming raw data into actionable insights for informed decision-making.",
    icon: BarChart2,
    backgroundColor: "#F8F8F8",
    primaryColor: "#F44336", //  A strong red
    secondaryColor: "#00BCD4",
    iconColor: "#90CAF9", // Lighter blue
  },
];

const generateChartData = (phase) => {
  return Array.from({ length: 7 }, (_, i) => ({
    day: `Day ${i + 1}`,
    efficiency: Math.min(
      100,
      Math.max(0, phase * 14 + i * 2 + Math.random() * 10)
    ),
    accuracy: Math.min(
      100,
      Math.max(0, phase * 12 + i * 3 + Math.random() * 8)
    ),
  }));
};

const StyledSlide = styled(motion.div)`
  .space-y-12 {
    h1,
    h2,
    h3,
    h4,
    p,
    div {
      color: ${(props) => props.primaryColor};
    }
  }

  .grid.grid-cols-2.gap-16.items-start {
    h2,
    h3,
    h4,
    p {
      color: ${(props) => props.primaryColor};
    }
    .bg-white {
      p {
        color: ${(props) => props.primaryColor};
      }
    } 

    .w-48.h-48 {
      svg {
        fill: ${(props) => props.iconColor} 
      } 
    } 
    
    .w-16.h-16  {
      svg {
        fill: ${(props) => props.iconColor};
      } 
    } 

    .w-24.h-24  {
      svg {
        fill: ${(props) => props.iconColor};
      } 
    } 

    .w-8.h-8 {
      svg {
        fill: ${(props) => props.primaryColor};
      } 
    } 
    
    .bg-white.p-4.rounded-full {
      svg {
        fill: ${(props) => props.primaryColor};
      }
    } 
    
   
   `;

const Slide = ({ slide, current, total, nextSlide, prevSlide }) => {
  const Icon = slide.icon;
  const [chartData, setChartData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setChartData(generateChartData(current));
  }, [current]);

  return (
    <StyledSlide
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center p-12 overflow-hidden primary-bg ${slide.backgroundColor}`}
      primaryColor={slide.primaryColor}
      secondaryColor={slide.secondaryColor}
      iconColor={slide.iconColor}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {slide.type === "cover" ? (
        <div className="space-y-12 text-center">
          <motion.h1
            className="text-6xl font-bold mb-8 tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {slide.title}
          </motion.h1>
          <motion.p
            className="text-3xl mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {slide.subtitle}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {slides.slice(1).map((s, index) => (
              <div key={index} className="group">
                <div className="w-32 h-32 rounded-lg bg-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl">
                  <s.icon className={`w-16 h-16 ${slide.iconColor}`} />
                </div>
                <p className="mt-2 text-sm">{s.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div
          className={`grid grid-cols-2 gap-16 items-start ${slide.backgroundColor}`}
        >
          <div className="text-left space-y-10">
            <motion.h2
              className="text-5xl font-semibold mb-8 tracking-tight"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {slide.title}
            </motion.h2>
            <motion.p
              className="text-xl leading-relaxed"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {slide.content}
            </motion.p>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Key Focus</h3>
              <p className="text-lg">{slide.keyFocus}</p>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-start space-y-12">
            <motion.div
              className="w-48 h-48 rounded-full bg-white shadow-xl flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Icon className="w-24 h-24" />
            </motion.div>
            <motion.div
              className="w-full bg-white rounded-lg shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="text-2xl font-semibold mb-6">
                Implementation Metrics
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                  <XAxis dataKey="day" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      borderColor: "#E5E7EB",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="efficiency"
                    stroke={slide.primaryColor}
                    strokeWidth={2}
                    dot={{ stroke: slide.primaryColor, strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke={slide.secondaryColor}
                    strokeWidth={2}
                    dot={{ stroke: slide.secondaryColor, strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      )}

      {/* Position arrow buttons below the content */}
      <div className="absolute bottom-12 flex justify-center w-full px-12">
        <motion.button
          onClick={prevSlide}
          className="bg-white p-4 rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 mx-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="text-gray-600 w-8 h-8" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="bg-white p-4 rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 mx-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="text-gray-600 w-8 h-8" />
        </motion.button>
      </div>

      <div className="absolute bottom-8 right-8 text-2xl font-semibold text-gray-400">
        {current} / {total}
      </div>
    </StyledSlide>
  );
};

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <Slide
          key={currentSlide}
          slide={slides[currentSlide]}
          current={currentSlide}
          total={slides.length - 1}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </AnimatePresence>
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
