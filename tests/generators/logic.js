var testdata = String.raw`
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="unittest_main" x="-13" y="-13">
    <field name="SUITE_NAME">Logic</field>
    <statement name="DO">
      <block type="unittest_assertvalue" inline="false">
        <field name="EXPECTED">TRUE</field>
        <value name="MESSAGE">
          <block type="text">
            <field name="TEXT">True</field>
          </block>
        </value>
        <value name="ACTUAL">
          <block type="logic_boolean">
            <field name="BOOL">TRUE</field>
          </block>
        </value>
        <next>
          <block type="unittest_assertvalue" inline="false">
            <field name="EXPECTED">FALSE</field>
            <value name="MESSAGE">
              <block type="text">
                <field name="TEXT">False</field>
              </block>
            </value>
            <value name="ACTUAL">
              <block type="logic_boolean">
                <field name="BOOL">FALSE</field>
              </block>
            </value>
            <next>
              <block type="unittest_assertvalue" inline="false">
                <field name="EXPECTED">TRUE</field>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Not true</field>
                  </block>
                </value>
                <value name="ACTUAL">
                  <block type="logic_negate" inline="false">
                    <value name="BOOL">
                      <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="unittest_assertvalue" inline="false">
                    <field name="EXPECTED">FALSE</field>
                    <value name="MESSAGE">
                      <block type="text">
                        <field name="TEXT">Not false</field>
                      </block>
                    </value>
                    <value name="ACTUAL">
                      <block type="logic_negate" inline="false">
                        <value name="BOOL">
                          <block type="logic_boolean">
                            <field name="BOOL">TRUE</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="procedures_callnoreturn">
                        <mutation name="test if"></mutation>
                        <next>
                          <block type="procedures_callnoreturn">
                            <mutation name="test ifelse"></mutation>
                            <next>
                              <block type="procedures_callnoreturn">
                                <mutation name="test equalities"></mutation>
                                <next>
                                  <block type="procedures_callnoreturn">
                                    <mutation name="test and"></mutation>
                                    <next>
                                      <block type="procedures_callnoreturn">
                                        <mutation name="test or"></mutation>
                                        <next>
                                          <block type="procedures_callnoreturn">
                                            <mutation name="test ternary"></mutation>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" x="387" y="-13">
    <field name="NAME">test if</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
    <statement name="STACK">
      <block type="controls_if" inline="false">
        <value name="IF0">
          <block type="logic_boolean">
            <field name="BOOL">FALSE</field>
          </block>
        </value>
        <statement name="DO0">
          <block type="unittest_fail">
            <field name="MESSAGE">if false</field>
          </block>
        </statement>
        <next>
          <block type="variables_set" inline="false">
            <field name="VAR">ok</field>
            <value name="VALUE">
              <block type="logic_boolean">
                <field name="BOOL">FALSE</field>
              </block>
            </value>
            <next>
              <block type="controls_if" inline="false">
                <value name="IF0">
                  <block type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="variables_set" inline="false">
                    <field name="VAR">ok</field>
                    <value name="VALUE">
                      <block type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                      </block>
                    </value>
                  </block>
                </statement>
                <next>
                  <block type="unittest_assertvalue" inline="false">
                    <field name="EXPECTED">TRUE</field>
                    <value name="MESSAGE">
                      <block type="text">
                        <field name="TEXT">if true</field>
                      </block>
                    </value>
                    <value name="ACTUAL">
                      <block type="variables_get">
                        <field name="VAR">ok</field>
                      </block>
                    </value>
                    <next>
                      <block type="variables_set" inline="false">
                        <field name="VAR">ok</field>
                        <value name="VALUE">
                          <block type="logic_boolean">
                            <field name="BOOL">FALSE</field>
                          </block>
                        </value>
                        <next>
                          <block type="controls_if" inline="false">
                            <mutation else="1"></mutation>
                            <value name="IF0">
                              <block type="logic_boolean">
                                <field name="BOOL">FALSE</field>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="unittest_fail">
                                <field name="MESSAGE">if/else false</field>
                              </block>
                            </statement>
                            <statement name="ELSE">
                              <block type="variables_set" inline="false">
                                <field name="VAR">ok</field>
                                <value name="VALUE">
                                  <block type="logic_boolean">
                                    <field name="BOOL">TRUE</field>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <next>
                              <block type="unittest_assertvalue" inline="false">
                                <field name="EXPECTED">TRUE</field>
                                <value name="MESSAGE">
                                  <block type="text">
                                    <field name="TEXT">if/else false</field>
                                  </block>
                                </value>
                                <value name="ACTUAL">
                                  <block type="variables_get">
                                    <field name="VAR">ok</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="variables_set" inline="false">
                                    <field name="VAR">ok</field>
                                    <value name="VALUE">
                                      <block type="logic_boolean">
                                        <field name="BOOL">FALSE</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="controls_if" inline="false">
                                        <mutation else="1"></mutation>
                                        <value name="IF0">
                                          <block type="logic_boolean">
                                            <field name="BOOL">TRUE</field>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="variables_set" inline="false">
                                            <field name="VAR">ok</field>
                                            <value name="VALUE">
                                              <block type="logic_boolean">
                                                <field name="BOOL">TRUE</field>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <statement name="ELSE">
                                          <block type="unittest_fail">
                                            <field name="MESSAGE">if/else true</field>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="unittest_assertvalue" inline="false">
                                            <field name="EXPECTED">TRUE</field>
                                            <value name="MESSAGE">
                                              <block type="text">
                                                <field name="TEXT">if/else true</field>
                                              </block>
                                            </value>
                                            <value name="ACTUAL">
                                              <block type="variables_get">
                                                <field name="VAR">ok</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="variables_set" inline="false">
                                                <field name="VAR">ok</field>
                                                <value name="VALUE">
                                                  <block type="logic_boolean">
                                                    <field name="BOOL">FALSE</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="controls_if" inline="false">
                                                    <mutation elseif="2" else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="logic_boolean">
                                                        <field name="BOOL">FALSE</field>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="unittest_fail">
                                                        <field name="MESSAGE">elseif 1</field>
                                                      </block>
                                                    </statement>
                                                    <value name="IF1">
                                                      <block type="logic_boolean">
                                                        <field name="BOOL">TRUE</field>
                                                      </block>
                                                    </value>
                                                    <statement name="DO1">
                                                      <block type="variables_set" inline="false">
                                                        <field name="VAR">ok</field>
                                                        <value name="VALUE">
                                                          <block type="logic_boolean">
                                                            <field name="BOOL">TRUE</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                    <value name="IF2">
                                                      <block type="logic_boolean">
                                                        <field name="BOOL">TRUE</field>
                                                      </block>
                                                    </value>
                                                    <statement name="DO2">
                                                      <block type="unittest_fail">
                                                        <field name="MESSAGE">elseif 2</field>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="unittest_fail">
                                                        <field name="MESSAGE">elseif 3</field>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="unittest_assertvalue" inline="false">
                                                        <field name="EXPECTED">TRUE</field>
                                                        <value name="MESSAGE">
                                                          <block type="text">
                                                            <field name="TEXT">elseif 4</field>
                                                          </block>
                                                        </value>
                                                        <value name="ACTUAL">
                                                          <block type="variables_get">
                                                            <field name="VAR">ok</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" x="712" y="-13">
    <field name="NAME">test ifelse</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
    <statement name="STACK">
      <block type="variables_set">
        <field name="VAR">ok</field>
        <value name="VALUE">
          <block type="logic_boolean">
            <field name="BOOL">FALSE</field>
          </block>
        </value>
        <next>
          <block type="controls_ifelse">
            <value name="IF0">
              <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
            <statement name="DO0">
              <block type="variables_set">
                <field name="VAR">ok</field>
                <value name="VALUE">
                  <block type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                  </block>
                </value>
              </block>
            </statement>
            <statement name="ELSE">
              <block type="unittest_fail">
                <field name="MESSAGE">ifelse true</field>
              </block>
            </statement>
            <next>
              <block type="unittest_assertvalue">
                <field name="EXPECTED">TRUE</field>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">ifelse true</field>
                  </block>
                </value>
                <value name="ACTUAL">
                  <block type="variables_get">
                    <field name="VAR">ok</field>
                  </block>
                </value>
                <next>
                  <block type="variables_set">
                    <field name="VAR">ok</field>
                    <value name="VALUE">
                      <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                      </block>
                    </value>
                    <next>
                      <block type="controls_ifelse">
                        <value name="IF0">
                          <block type="logic_boolean">
                            <field name="BOOL">FALSE</field>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="unittest_fail">
                            <field name="MESSAGE">ifelse false</field>
                          </block>
                        </statement>
                        <statement name="ELSE">
                          <block type="variables_set">
                            <field name="VAR">ok</field>
                            <value name="VALUE">
                              <block type="logic_boolean">
                                <field name="BOOL">TRUE</field>
                              </block>
                            </value>
                          </block>
                        </statement>
                        <next>
                          <block type="unittest_assertvalue">
                            <field name="EXPECTED">TRUE</field>
                            <value name="MESSAGE">
                              <block type="text">
                                <field name="TEXT">ifelse false</field>
                              </block>
                            </value>
                            <value name="ACTUAL">
                              <block type="variables_get">
                                <field name="VAR">ok</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" x="-12" y="412">
    <field name="NAME">test equalities</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
    <statement name="STACK">
      <block type="unittest_assertvalue" inline="false">
        <field name="EXPECTED">TRUE</field>
        <value name="MESSAGE">
          <block type="text">
            <field name="TEXT">Equal yes</field>
          </block>
        </value>
        <value name="ACTUAL">
          <block type="logic_compare">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="math_number">
                <field name="NUM">2</field>
              </block>
            </value>
            <value name="B">
              <block type="math_number">
                <field name="NUM">2</field>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="unittest_assertvalue" inline="false">
            <field name="EXPECTED">FALSE</field>
            <value name="MESSAGE">
              <block type="text">
                <field name="TEXT">Equal no</field>
              </block>
            </value>
            <value name="ACTUAL">
              <block type="logic_compare">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="math_number">
                    <field name="NUM">3</field>
                  </block>
                </value>
                <value name="B">
                  <block type="math_number">
                    <field name="NUM">4</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="unittest_assertvalue" inline="false">
                <field name="EXPECTED">TRUE</field>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Not equal yes</field>
                  </block>
                </value>
                <value name="ACTUAL">
                  <block type="logic_compare">
                    <field name="OP">NEQ</field>
                    <value name="A">
                      <block type="math_number">
                        <field name="NUM">5</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="math_number">
                        <field name="NUM">6</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="unittest_assertvalue" inline="false">
                    <field name="EXPECTED">FALSE</field>
                    <value name="MESSAGE">
                      <block type="text">
                        <field name="TEXT">Not equal no</field>
                      </block>
                    </value>
                    <value name="ACTUAL">
                      <block type="logic_compare">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="math_number">
                            <field name="NUM">3</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="math_number">
                            <field name="NUM">4</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="unittest_assertvalue" inline="false">
                        <field name="EXPECTED">TRUE</field>
                        <value name="MESSAGE">
                          <block type="text">
                            <field name="TEXT">Smaller yes</field>
                          </block>
                        </value>
                        <value name="ACTUAL">
                          <block type="logic_compare">
                            <field name="OP">LT</field>
                            <value name="A">
                              <block type="math_number">
                                <field name="NUM">5</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="math_number">
                                <field name="NUM">6</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="unittest_assertvalue" inline="false">
                            <field name="EXPECTED">FALSE</field>
                            <value name="MESSAGE">
                              <block type="text">
                                <field name="TEXT">Smaller no</field>
                              </block>
                            </value>
                            <value name="ACTUAL">
                              <block type="logic_compare">
                                <field name="OP">LT</field>
                                <value name="A">
                                  <block type="math_number">
                                    <field name="NUM">7</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="math_number">
                                    <field name="NUM">7</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="unittest_assertvalue" inline="false">
                                <field name="EXPECTED">TRUE</field>
                                <value name="MESSAGE">
                                  <block type="text">
                                    <field name="TEXT">Greater yes</field>
                                  </block>
                                </value>
                                <value name="ACTUAL">
                                  <block type="logic_compare">
                                    <field name="OP">GT</field>
                                    <value name="A">
                                      <block type="math_number">
                                        <field name="NUM">9</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="math_number">
                                        <field name="NUM">8</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="unittest_assertvalue" inline="false">
                                    <field name="EXPECTED">FALSE</field>
                                    <value name="MESSAGE">
                                      <block type="text">
                                        <field name="TEXT">Greater no</field>
                                      </block>
                                    </value>
                                    <value name="ACTUAL">
                                      <block type="logic_compare">
                                        <field name="OP">GT</field>
                                        <value name="A">
                                          <block type="math_number">
                                            <field name="NUM">10</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="math_number">
                                            <field name="NUM">10</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="unittest_assertvalue" inline="false">
                                        <field name="EXPECTED">TRUE</field>
                                        <value name="MESSAGE">
                                          <block type="text">
                                            <field name="TEXT">Smaller-equal yes</field>
                                          </block>
                                        </value>
                                        <value name="ACTUAL">
                                          <block type="logic_compare">
                                            <field name="OP">LTE</field>
                                            <value name="A">
                                              <block type="math_number">
                                                <field name="NUM">11</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="math_number">
                                                <field name="NUM">11</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="unittest_assertvalue" inline="false">
                                            <field name="EXPECTED">FALSE</field>
                                            <value name="MESSAGE">
                                              <block type="text">
                                                <field name="TEXT">Smaller-equal no</field>
                                              </block>
                                            </value>
                                            <value name="ACTUAL">
                                              <block type="logic_compare">
                                                <field name="OP">LTE</field>
                                                <value name="A">
                                                  <block type="math_number">
                                                    <field name="NUM">13</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="math_number">
                                                    <field name="NUM">12</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="unittest_assertvalue" inline="false">
                                                <field name="EXPECTED">TRUE</field>
                                                <value name="MESSAGE">
                                                  <block type="text">
                                                    <field name="TEXT">Greater-equal yes</field>
                                                  </block>
                                                </value>
                                                <value name="ACTUAL">
                                                  <block type="logic_compare">
                                                    <field name="OP">GTE</field>
                                                    <value name="A">
                                                      <block type="math_number">
                                                        <field name="NUM">14</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="math_number">
                                                        <field name="NUM">14</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="unittest_assertvalue" inline="false">
                                                    <field name="EXPECTED">FALSE</field>
                                                    <value name="MESSAGE">
                                                      <block type="text">
                                                        <field name="TEXT">Greater-equal no</field>
                                                      </block>
                                                    </value>
                                                    <value name="ACTUAL">
                                                      <block type="logic_compare">
                                                        <field name="OP">GTE</field>
                                                        <value name="A">
                                                          <block type="math_number">
                                                            <field name="NUM">15</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="math_number">
                                                            <field name="NUM">16</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" x="385" y="1208">
    <field name="NAME">test and</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
    <statement name="STACK">
      <block type="unittest_assertvalue" inline="false">
        <field name="EXPECTED">TRUE</field>
        <value name="MESSAGE">
          <block type="text">
            <field name="TEXT">And true/true</field>
          </block>
        </value>
        <value name="ACTUAL">
          <block type="logic_operation">
            <field name="OP">AND</field>
            <value name="A">
              <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
            <value name="B">
              <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="unittest_assertvalue" inline="false">
            <field name="EXPECTED">FALSE</field>
            <value name="MESSAGE">
              <block type="text">
                <field name="TEXT">And false/true</field>
              </block>
            </value>
            <value name="ACTUAL">
              <block type="logic_operation">
                <field name="OP">AND</field>
                <value name="A">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
                <value name="B">
                  <block type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="unittest_assertvalue" inline="false">
                <field name="EXPECTED">FALSE</field>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">And true/false</field>
                  </block>
                </value>
                <value name="ACTUAL">
                  <block type="logic_operation">
                    <field name="OP">AND</field>
                    <value name="A">
                      <block type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="unittest_assertvalue" inline="false">
                    <field name="EXPECTED">FALSE</field>
                    <value name="MESSAGE">
                      <block type="text">
                        <field name="TEXT">And false/false</field>
                      </block>
                    </value>
                    <value name="ACTUAL">
                      <block type="logic_operation">
                        <field name="OP">AND</field>
                        <value name="A">
                          <block type="logic_boolean">
                            <field name="BOOL">FALSE</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="logic_boolean">
                            <field name="BOOL">FALSE</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" x="-13" y="1238">
    <field name="NAME">test or</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
    <statement name="STACK">
      <block type="unittest_assertvalue" inline="false">
        <field name="EXPECTED">TRUE</field>
        <value name="MESSAGE">
          <block type="text">
            <field name="TEXT">Or true/true</field>
          </block>
        </value>
        <value name="ACTUAL">
          <block type="logic_operation">
            <field name="OP">OR</field>
            <value name="A">
              <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
            <value name="B">
              <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="unittest_assertvalue" inline="false">
            <field name="EXPECTED">TRUE</field>
            <value name="MESSAGE">
              <block type="text">
                <field name="TEXT">Or false/true</field>
              </block>
            </value>
            <value name="ACTUAL">
              <block type="logic_operation">
                <field name="OP">OR</field>
                <value name="A">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
                <value name="B">
                  <block type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="unittest_assertvalue" inline="false">
                <field name="EXPECTED">TRUE</field>
                <value name="MESSAGE">
                  <block type="text">
                    <field name="TEXT">Or true/false</field>
                  </block>
                </value>
                <value name="ACTUAL">
                  <block type="logic_operation">
                    <field name="OP">OR</field>
                    <value name="A">
                      <block type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="unittest_assertvalue" inline="false">
                    <field name="EXPECTED">FALSE</field>
                    <value name="MESSAGE">
                      <block type="text">
                        <field name="TEXT">Or false/false</field>
                      </block>
                    </value>
                    <value name="ACTUAL">
                      <block type="logic_operation">
                        <field name="OP">OR</field>
                        <value name="A">
                          <block type="logic_boolean">
                            <field name="BOOL">FALSE</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="logic_boolean">
                            <field name="BOOL">FALSE</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" x="-13" y="1563">
    <field name="NAME">test ternary</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
    <statement name="STACK">
      <block type="unittest_assertequals" inline="false">
        <value name="MESSAGE">
          <block type="text">
            <field name="TEXT">if true</field>
          </block>
        </value>
        <value name="ACTUAL">
          <block type="logic_ternary" inline="true">
            <value name="IF">
              <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
            <value name="THEN">
              <block type="math_number">
                <field name="NUM">42</field>
              </block>
            </value>
            <value name="ELSE">
              <block type="math_number">
                <field name="NUM">99</field>
              </block>
            </value>
          </block>
        </value>
        <value name="EXPECTED">
          <block type="math_number">
            <field name="NUM">42</field>
          </block>
        </value>
        <next>
          <block type="unittest_assertequals" inline="false">
            <value name="MESSAGE">
              <block type="text">
                <field name="TEXT">if true</field>
              </block>
            </value>
            <value name="ACTUAL">
              <block type="logic_ternary" inline="true">
                <value name="IF">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
                <value name="THEN">
                  <block type="math_number">
                    <field name="NUM">42</field>
                  </block>
                </value>
                <value name="ELSE">
                  <block type="math_number">
                    <field name="NUM">99</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="EXPECTED">
              <block type="math_number">
                <field name="NUM">99</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
`
